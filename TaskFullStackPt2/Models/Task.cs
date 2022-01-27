using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskFullStackPt2.Models
{
    public class Task
    {

        public int Id { get; set; }
        public string Name { get; set; }
        public string Instructions { get; set; }
        public string DueDate { get; set; }
        public bool IsCompleted { get; set; }

        public Task(int id, string name, string instructions, string dueDate, bool isCompleted)
        {
            Id = id;
            Name = name;
            Instructions = instructions;
            DueDate = dueDate;
            IsCompleted = isCompleted;
        }
        public Task()
        {

        }
    }
}
