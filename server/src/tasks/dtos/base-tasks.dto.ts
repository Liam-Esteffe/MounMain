export class BaseTasksDto {
    title: string;
    subtitle: string;
    property: 'Frontend' | 'Backend' | 'Testing' | 'UIUX' | 'Data Analysis' | 'Web Designing';
    progress: number;
    deadline: Date;
}