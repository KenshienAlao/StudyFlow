export type Subject = {
    id: number,
    name: string,
    color?: string,
    description?: string,
}

export type SubjectCreate = Omit<Subject, 'id'>
export type SubjectUpdate = Subject
export type SubjectDelete = Pick<Subject, 'id'>