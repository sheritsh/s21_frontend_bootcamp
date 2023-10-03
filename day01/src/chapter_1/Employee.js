/*
У экземпляра класса должны присутствовать св-ва:
-name string.
-grade string Для простоты предположим, что система грейдов будет иметь значения от L1 до L4.
-hardSkills string[].
-company string.

Так же должны иметься три метода:

-changeCompany(newCompanyName) - сотрудник может сменить компанию, либо же просто уволиться.
-upGrade() - сотрудник может повысить квалификацию.
-addSkill(newSkillName) - сотрудник может дополнить список своих скиллов.
*/

class Employee {
  /**
   * Creates a new Employee.
   * @constructor
   * @param {string} name - The name of the employee.
   * @param {string} grade - The grade of the employee (e.g., L1 to L4).
   * @param {string[]} hardSkills - An array of hard skills of the employee.
   * @param {string} company - The current company of the employee.
   */
  constructor(name, grade, hardSkills, company) {
    this.name = name;
    this.grade = grade;
    this.hardSkills = hardSkills;
    this.company = company;
  }

  /**
   * Changes the current company of the employee.
   * @param {string} newCompanyName - The new company name.
   */
  changeCompany(newCompanyName) {
    this.company = newCompanyName;
  }

  /**
   * Upgrades the qualification/grade of the employee.
   */
  upGrade() {
    if (this.grade === 'L1') {
      this.grade = 'L2';
    } else if (this.grade === 'L2') {
      this.grade = 'L3';
    } else if (this.grade === 'L3') {
      this.grade = 'L4';
    }
  }

  /**
   * Adds a new skill to the employee's list of hard skills.
   * @param {string} newSkillName - The name of the new skill to be added.
   */
  addSkill(newSkillName) {
    this.hardSkills.push(newSkillName);
  }
}

export default Employee;
