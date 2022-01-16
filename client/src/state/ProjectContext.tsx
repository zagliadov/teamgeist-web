import { FC, createContext, useState } from 'react';
import { IProject } from '../interfaces/stateInterface/stateInterface';


export const ProjectContext: any = createContext([]);


export const ProjectProvider: FC = ({ children }) => {

    const [project, setProject] = useState<IProject[]>([
        {
            key: '1',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'Разработка сервиса',
            projectType: 'Внешний', 
        },
        {
            key: '2',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'Внутренний проект',
            projectType: 'Внутренний', 
        },
        {
            key: '3',
            projectName: 'teamgeist',
            status: 'Удален',
            description: 'description',
            projectType: 'Внутренний', 
        },
        {
            key: '4',
            projectName: 'Terminal',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '5',
            projectName: 'teamgeist ',
            status: 'Удален',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '6',
            projectName: 'teamgeist',
            status: 'Удален',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '7',
            projectName: 'Window',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '8',
            projectName: 'View',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внутренний', 
        },
        {
            key: '9',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '10',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '11',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '12',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '13',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внутренний', 
        },
        {
            key: '14',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внутренний', 
        },
        {
            key: '15',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '16',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внутренний', 
        },
        {
            key: '17',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '18',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '19',
            projectName: 'teamgeist',
            status: 'Удален',
            description: 'description',
            projectType: 'Внешний', 
        },
        {
            key: '20',
            projectName: 'teamgeist',
            status: 'Открыт',
            description: 'description',
            projectType: 'Внутренний', 
        },
    ]);

    return (
        <ProjectContext.Provider value={[project, setProject]}>
            {children}
        </ProjectContext.Provider>
    )
}
