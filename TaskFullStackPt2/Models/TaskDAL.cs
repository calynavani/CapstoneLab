using Dapper;
using MySqlConnector;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TaskFullStackPt2.Models
{
    public class TaskDAL
    {
        public List<Task> ListAllTasks()
        {
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                string sql = "select * from tasks";
                connect.Open();
                List<Task> taskList = connect.Query<Task>(sql).ToList();
                connect.Close();
                return taskList;
            }
        }

        public Task GetATask(int id)
        {
            List<Task> output = ListAllTasks();
            Task match;
            try
            {
                match = output.Where(t => t.Id == id).First();
            }
            catch (InvalidOperationException)
            {
                match = new Task();
                match.Name = $"Task at index {id} does not exist, please try another id";
            }

            return match;
        }

        public void InsertTask(Task t)
        {
            string sql = $"insert into tasks values({0}, '{t.Name}', '{t.Instructions}','{t.DueDate}',{0})";
            //string sql = $"insert into tasks values({0}, '{t.Name}', '{t.Instructions}','{t.DueDate.Year}-{t.DueDate.Month}-{t.DueDate.Day}',{0})";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }

        }

        public void DeleteTask(int id)
        {
            string sql = $"delete from tasks where id ={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }
        }

        public void UpdateTask(int id, Task newValues)
        {
            //string sql = $"update tasks set `name`='{newValues.Name}', instructions='{newValues.Instructions}', dueDate='{newValues.DueDate.Year}-{newValues.DueDate.Month}-{newValues.DueDate.Day}', isCompleted={newValues.IsCompleted} where id={id}";
            string sql = $"update tasks set isCompleted={newValues.IsCompleted} where id={id}";
            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                connect.Query<Task>(sql);
                connect.Close();
            }
        }

        public List<Task> SearchTask(string name)
        {
            string sql = $"select * from tasks where (`name` like '%{name}%')";

            using (var connect = new MySqlConnection(Secret.Connection))
            {
                connect.Open();
                List<Task> t = connect.Query<Task>(sql).ToList();
                connect.Close();

                return t;
            };


        }
    }
}
