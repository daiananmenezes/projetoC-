using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/user")]
    public class UserController : ControllerBase
    {
        private readonly DataContext _context;
        public UserController(DataContext context)
        {
            _context = context;
        }

        //POST: api/user/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] User user)
        {
            _context.Users.Add(user);
            _context.SaveChanges();
            return Created("", user);
        }

        //GET: api/user/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Users.ToList());

        //GET: api/user/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            User user = _context.Users.Find(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        //DELETE: /api/user/delete/bolacha
        [HttpDelete]
        [Route("delete/{name}")]
        public IActionResult Delete([FromRoute] string name)
        {
            //Expressão lambda
            //Buscar um objeto na tabela de users com base no nome
            User user = _context.Users.FirstOrDefault(user => user.Nome == name);

            if (user == null)
            {
                return NotFound();
            }
            _context.Users.Remove(user);
            _context.SaveChanges();
            return Ok(_context.Users.ToList());
        }


        //PUT: api/user/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] User user)
        {
            _context.Users.Update(user);
            _context.SaveChanges();
            return Ok(user);
        }
    }
}