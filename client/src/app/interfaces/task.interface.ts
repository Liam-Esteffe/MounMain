export type Task = {
    title: string;
    subtitle: string;
    property: 'Frontend' | 'Backend' | 'Testing' | 'UIUX' | 'Data Analysis' | 'Web Designing';
    progress: number;
    deadline: Date;
}