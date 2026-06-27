"use client";

import { Structure } from "@/components/structure";
import { CreateSubjectModal } from "@/components/subject/create-subject.modal";
import { DeleteConfirmationModal } from "@/components/subject/delete-confirmation.modal";
import { EditModal } from "@/components/subject/edit.modal";
import { EmptySubject } from "@/components/subject/empty-subject";
import { Error } from "@/components/subject/error-subject";
import { Header } from "@/components/subject/header-subject";
import { SubjectCard } from "@/components/subject/subject";
import { SubjectLoader } from "@/components/subject/subject-loader";
import {
  useCreateSubject,
  useDeleteSubject,
  useGetSubject,
  useUpdateSubject,
} from "@/hooks/use-subject";
import { Subject } from "@/model/subject.model";
import {
  SubjectCreateSchema,
  SubjectDeleteSchema,
  SubjectUpdateSchema,
} from "@/validation/subject.validation";
import { useState, FormEvent, useEffect } from "react";
import { toast } from "react-toastify";

export default function SubjectsPage() {
  const {
    data: subjects,
    isPending: isGetSubjectPending,
    error: errorGetSubject,
  } = useGetSubject();
  const {
    mutate: createSubject,
    isPending: isCreateSubjectPending,
    error: errorCreateSubject,
  } = useCreateSubject();
  const {
    mutate: deleteSubject,
    isPending: isDeleteSubjectPending,
    error: errorDeleteSubject,
  } = useDeleteSubject();
  const {
    mutate: editSubject,
    isPending: isEditSubjectPending,
    error: errorEditSubject,
  } = useUpdateSubject();

  const [isOpen, setIsOpen] = useState(false);
  const [subjectToEdit, setSubjectToEdit] = useState<Subject | null>(null);
  const [subjectToDelete, setSubjectToDelete] = useState<Subject | null>(null);
  const [activeMenuId, setActiveMenuId] = useState<number | null>(null);

  useEffect(() => {
    const handleOutsideClick = () => setActiveMenuId(null);
    if (activeMenuId) {
      window.addEventListener("click", handleOutsideClick);
    }
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [activeMenuId]);

  const handleCreateSubject = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    const validate = SubjectCreateSchema.safeParse(data);
    if (!validate.success) {
      toast.error(validate.error.issues[0].message);
      return;
    }

    createSubject(validate.data, {
      onSuccess: () => {
        setIsOpen(false);
      },
    });
  };

  const handleConfirmDelete = (id: number) => {
    if (!subjectToDelete) return;
    const validate = SubjectDeleteSchema.safeParse(id);
    if (!validate.success) {
      toast.error(validate.error.issues[0].message);
      return;
    }

    deleteSubject(validate.data, {
      onSuccess: () => {
        setSubjectToDelete(null);
      },
    });
  };

  const handleEditSubject = (e: FormEvent<HTMLFormElement>, id: number) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());

    const validate = SubjectUpdateSchema.safeParse({ ...data, id });
    if (!validate.success) {
      toast.error(validate.error.issues[0].message);
      return;
    }

    editSubject(validate.data, {
      onSuccess: () => {
        setSubjectToEdit(null);
      },
    });
  };

  return (
    <Structure>
      <div className="space-y-8 select-none">
        <Header setIsOpen={setIsOpen} />
        {errorGetSubject && <Error error={errorGetSubject} />}

        {isGetSubjectPending ? (
          <SubjectLoader />
        ) : subjects && subjects?.length > 0 ? (
          <SubjectCard
            subjects={subjects}
            activeMenuId={activeMenuId}
            setActiveMenuId={setActiveMenuId}
            setSubjectToEdit={setSubjectToEdit}
            setSubjectToDelete={setSubjectToDelete}
          />
        ) : (
          <EmptySubject setIsOpen={setIsOpen} />
        )}

        <CreateSubjectModal
          isModalOpen={isOpen}
          setIsModalOpen={setIsOpen}
          isCreateSubjectPending={isCreateSubjectPending}
          errorCreateSubject={errorCreateSubject}
          handleCreateSubject={handleCreateSubject}
        />

        <DeleteConfirmationModal
          subjectToDelete={subjectToDelete}
          isDeleteSubjectPending={isDeleteSubjectPending}
          errorDeleteSubject={errorDeleteSubject}
          setSubjectToDelete={setSubjectToDelete}
          handleConfirmDelete={handleConfirmDelete}
        />

        <EditModal
          subjectToEdit={subjectToEdit}
          setSubjectToEdit={setSubjectToEdit}
          handleEditSubject={handleEditSubject}
          isEditSubjectPending={isEditSubjectPending}
          errorEditSubject={errorEditSubject}
        />
      </div>
    </Structure>
  );
}
