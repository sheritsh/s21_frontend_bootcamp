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

export default class Employee {
  #name;

  #grade;

  #hardSkills;

  #company;

  constructor(name, grade, hardSkills, company) {
    this.#name = name;
    this.#grade = grade;
    this.#hardSkills = hardSkills;
    this.#company = company;
  }

  /**
   * @param {string} newCompanyName
   */
  changeCompany(newCompanyName) {
    this.#company = newCompanyName;
  }

  upGrade() {
    if (this.#grade === 'L1') {
      this.#grade = 'L2';
    } else if (this.#grade === 'L2') {
      this.#grade = 'L3';
    } else if (this.#grade === 'L3') {
      this.#grade = 'L4';
    }
  }

  /**
   * @param {string} newSkillName
   */
  addSkill(newSkillName) {
    this.#hardSkills.push(newSkillName);
  }

  getEmployee() {
    return {
      name: this.#name,
      grade: this.#grade,
      hardSkills: this.#hardSkills,
      company: this.#company,
    };
  }
}
