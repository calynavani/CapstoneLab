using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TaskFullStackPt2.Models;
using Task = TaskFullStackPt2.Models.Task;

namespace TaskFullStackPt2.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class TaskController : ControllerBase
    {
        TaskDAL db = new TaskDAL();
        [HttpGet]
        public List<Task> GetTasks()
        {
            return db.ListAllTasks();
        }


        [HttpGet("get/{id}")]
        public Task GetTask(int id)
        {
            return db.GetATask(id);
        }

        [HttpPost("makeNew")]
        public void PostTask(Task t)
        {
            db.InsertTask(t);
        }

        [HttpDelete("delete/{id}")]
        public void DeleteTask(int id)
        {
            db.DeleteTask(id);
        }

        [HttpPut("update/{id}")]
        public void UpdateTask(int id, Task t)
        {
            Task orginial = db.GetATask(id);
            if (t.Name == null || t.Name == "")
            {
                t.Name = orginial.Name;
            }

            if (t.Instructions == null || t.Instructions == "")
            {
                t.Instructions = orginial.Instructions;
            }

            if (t.DueDate == null)
            {
                t.DueDate = orginial.DueDate;
            }

            if (t.IsCompleted == false)
            {
                t.IsCompleted = orginial.IsCompleted;
            }

            db.UpdateTask(id, t);
        }

        [HttpGet("Search/{name}")]
        public List<Task> SearchTasks(string name)
        {
            return db.SearchTask(name);
        }
    }
}
