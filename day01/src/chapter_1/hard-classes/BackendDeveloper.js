/* **Backend Developer** - Класс, который наследуется от класса Employee.
1.Имеет новые св-ва:
- stack - Массив в котором указаны технологии, которыми владеет разработчик.
- developerSide - 'backend'
- projectQuantity - Число завершенных проектов.
2. Методы:
- expandStack(someTech) - разработчик может увеличить стек технологий.

stack - массив строк
- developerSide - строка ('backend')
- projectQuantity - number
expandStack(newTech) - в кач-ве аргумента принимает строку
*/

import Employee from '../Employee';

/**
 * Represents a Frontend Developer, extending the Employee class.
 * @extends Employee
 */
class BackendDeveloper extends Employee {
  /**
   * Create a Frontend Developer.
   * @param {string} name - The name of the developer.
   * @param {string} grade - The grade of the developer (e.g., L1, L2).
   * @param {string[]} hardSkills - An array of hard skills the developer possesses.
   * @param {string} company - The name of the current company.
   * @param {string[]} stack - An array of technologies the developer is proficient in.
   */
  constructor(name, grade, hardSkills, company, stack) {
    super(name, grade, hardSkills, company);
    /**
     * The stack of technologies the developer is proficient in.
     * @type {string[]}
     */
    this.stack = stack;
    /**
     * The developer's side, which is 'backend'.
     * @type {string}
     */
    this.developerSide = 'backend';
    /**
     * The number of completed projects by the developer.
     * @type {number}
     */
    this.projectQuantity = 0;
  }

  /**
   * Expand the developer's stack of technologies.
   * @param {string} newTech - The new technology to add to the stack.
   */
  expandStack(newTech) {
    this.stack.push(newTech);
  }
}

export default BackendDeveloper;
