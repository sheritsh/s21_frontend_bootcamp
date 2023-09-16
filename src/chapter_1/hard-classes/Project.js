/* **Project** - класс описывающий проект компании. На проекте может быть только 1 менеджер!
Каждый сотрудник может работать только над одним проектом! Состоит из:
1. Св-ва:
- Project Name
- minQualification - минимальная квалификация сотрудника, для работы на данном проекте.
- Team - команда проекта.
Объект, типа {manager: Manager, developers: {Frontend : [], backend: []}}.
В св-ва этого объекта указан массив аналогичных классов.

2. Методы:
- addNewProjectMember(member) - Метод внутри которого вызывается проверка менеджера на то,
  подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.

- projectName - string
- minQualification -string
- Team -  {
    manager : экземпляр класса Manager
    developers: {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    }
}

completeProject()
addNewProjectMember(Developer) - Метод внутри которого вызывается проверка менеджера на то,
подходит ли сотрудник проекту. Если подходит, то команда расширяется, иначе нет.
*/

import Employee from '../Employee';
import FrontendDeveloper from './FrontendDeveloper';
import BackendDeveloper from './BackendDeveloper';
import Manager from './Manager';

class Project {
  /**
   * Creates a new Project.
   * @constructor
   * @param {string} projectName - The name of the project.
   * @param {string} minQualification - The minimum qualification required for the project.
   * @param {Manager} manager - The manager assigned to the project.
   */
  constructor(projectName, minQualification, manager) {
    this.projectName = projectName;
    this.minQualification = minQualification;
    this.Team = {
      manager,
      developers: {
        frontend: [],
        backend: [],
      },
    };
  }

  /**
   * Adds a new employee to the project team.
   * @param {Employee} employee - The employee to be added to the project.
   */
  addNewProjectMember(employee) {
    if (employee instanceof Manager) {
      console.log('A project can have only one manager.');
      this.Team.manager = employee;
    } else if (employee.grade >= this.minQualification) {
      if (employee instanceof FrontendDeveloper) {
        this.Team.developers.frontend.push(employee);
        console.log(`Frontend Developer ${employee.name} added to the project.`);
      } else if (employee instanceof BackendDeveloper) {
        this.Team.developers.backend.push(employee);
        console.log(`Backend Developer ${employee.name} added to the project.`);
      }
    } else {
      console.log(`${employee.name} does not meet the qualification requirements for this project.`);
    }
  }

  /**
   * Completes the project and removes it from the company's current projects.
   */
  completeProject() {
    console.log(`${this.projectName} was successfully completed.`);
  }
}

export default Project;
