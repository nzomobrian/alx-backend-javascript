/**
 * Represents a Holberton Course.
 */
export default class HolbertonCourse
{
  /**
   * Creates a new @see {@link HolbertonCourse}.
   *
   * @param {String} name - The name of the course.
   * @param {Number} length - How long the course is (in months).
   * @param {String[]} students - The names of students in the course.
   */
  constructor(name, length, students)
	{
    this.name = name;
    this.length = length;
    this.students = students;
	}

  /**
   * Gets the name of this course.
   */
  get name()
	{
    return this._name;
	}
}	
