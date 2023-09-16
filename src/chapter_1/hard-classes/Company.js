/*
**Company** - класс описывающий IT компанию. Состоит из:
1. Св-ва:
- companyName
- currentProjects - текущий пулл проектов. Массив экземпляров класса Project
- completedProjects - пулл завершенных проектов. Массив экземпляров класса Project
- staff - весь пулл сотрудников компании. Это объект, у которого есть поля Developers,
  Managers. В этих полях лежат массивы экземпляров аналогичных классов.
2. Методы:
- addNewCompanyMember() - позволяет нанять нового сотрудника.
  В результате метода у выбранного сотрудника
должно смениться имя компании.
- addProject() - позволяет добавить проект в пулл текущих.
- getMembersQuantity() - позволяет получить кол-во сотрудников, работающих в данной комании
- completeProject(project) - позволяет закончить проект.
  В результате выполнения функции проект из currentProjects перемещается в completedProjects.
  У команды данного проекта должно увеличиться кол-во завершенных проектов.

Св-ва и методы класса
companyName - string
currentProjects - Массив экземпляров класса Project
completedProjects -  Массив экземпляров класса Project
staff - {
    developers :  {
    frontend : массив содержащий экземпляры класса FrontendDeveloper
    backend : массив содержащий экземпляры класса DackendDeveloper
    },
    managers: массив содержащий экземпляры класса Manager
}

addNewCompanyMember(Developer/Manager) - в кач-ве аргумента принимает
экземляр класса FrontendDeveloper, Backend Developer или Manager
addProject(Project) - в кач-ве аргумента принимает экземляр класса Project
getMembersQuantity()
*/

import FrontendDeveloper from './FrontendDeveloper';
import BackendDeveloper from './BackendDeveloper';
import Manager from './Manager';
import Employee from '../Employee';
import Project from './Project';

class Company {
  /**
   * Creates a new Company.
   * @constructor
   * @param {string} companyName - The name of the company.
   */
  constructor(companyName) {
    this.companyName = companyName;
    this.currentProjects = [];
    this.completedProjects = [];
    this.staff = {
      developers: {
        frontend: [],
        backend: [],
      },
      managers: [],
    };
  }

  /**
   * Adds a new employee to the company.
   * @param {Employee} employee - The employee to be added. Should be an instance of
   * Employee, FrontendDeveloper, BackendDeveloper, or Manager.
   */
  addNewCompanyMember(employee) {
    if (employee instanceof Employee) {
      employee.changeCompany(this.companyName);
      if (employee instanceof FrontendDeveloper) {
        this.staff.developers.frontend.push(employee);
      } else if (employee instanceof BackendDeveloper) {
        this.staff.developers.backend.push(employee);
      } else if (employee instanceof Manager) {
        this.staff.managers.push(employee);
      } else {
        console.log('Invalid employee type.');
      }
    } else {
      console.log('This object is not an employee.');
    }
  }

  /**
   * Adds a new project to the company's current projects.
   * @param {Project} project - The project to be added.
   */
  addProject(project) {
    if (project instanceof Project) {
      this.currentProjects.push(project);
    } else {
      console.log('Please provide a valid project.');
    }
  }

  /**
   * Gets the total number of members (employees) in the company.
   * @returns {number} The total number of members.
   */
  getMembersQuantity() {
    let totalMembers = 0;
    totalMembers += this.staff.developers.frontend.length;
    totalMembers += this.staff.developers.backend.length;
    totalMembers += this.staff.managers.length;
    return totalMembers;
  }

  /**
   * Completes a project and moves it to the completed projects list.
   * @param {Project} project - The project to be completed.
   */
  completeProject(project) {
    if (project instanceof Project) {
      const index = this.currentProjects.indexOf(project);
      if (index !== -1) {
        this.currentProjects.splice(index, 1);
        this.completedProjects.push(project);
        project.completeProject();
      } else {
        console.log('Project not found in current projects.');
      }
    } else {
      console.log('Please provide a valid project.');
    }
  }
}

export default Company;
