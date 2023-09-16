/* **Manager** - Класс, который наследуется от класса Employee.
1.Имеет новые св-ва:
- projectQuantity - Число завершенных проектов.
2. Методы:
- checkMember(minQualification, member) - менеджер проверяет, удовлетворяет ли сотрудник условиям
  проекта. Сотрудник, состоящий в другой компании не может работать над проектом другой компании.

projectQuantity - number
checkMember(minQualification, member) - в качестве аргумента принимается строка
('L1'/'L2'/'L3'/'L4') и BackendDeveloper || FrontendDeveloper
*/

import Employee from '../Employee';

/**
 * Represents a Manager, extending the Employee class.
 * @extends Employee
 */
class Manager extends Employee {
  /**
   * Create a Manager.
   * @param {string} name - The name of the manager.
   * @param {string} grade - The grade of the manager (e.g., L1, L2).
   * @param {string[]} hardSkills - An array of hard skills the manager possesses.
   * @param {string} company - The name of the current company.
   */
  constructor(name, grade, hardSkills, company) {
    super(name, grade, hardSkills, company);
    /**
     * The number of completed projects managed by the manager.
     * @type {number}
     */
    this.projectQuantity = 0;
  }

  /**
   * Check if a member meets the project's minimum qualification and company constraints.
   * @param {string} minQualification - The minimum qualification required (L1, L2, L3, L4).
   * @param {BackendDeveloper|FrontendDeveloper} member - The member to be checked.
   * @returns {boolean} - True if the member satisfies the conditions, false otherwise.
   */
  checkMember(minQualification, member) {
    if (member.company !== this.companyName) {
      return false; // Member is from another company.
    }

    if (member.grade >= minQualification) {
      return true; // Member meets the qualification requirement.
    }

    return false;
  }
}

export default Manager;
