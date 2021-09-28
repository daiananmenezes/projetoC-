using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/diet")]
    public class DietController : ControllerBase
    {
        private readonly DataContext _context;
        public DietController(DataContext context)
        {
            _context = context;
        }

        //POST: api/diet/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Diet diet)
        {
            _context.Diets.Add(diet);
            _context.SaveChanges();
            return Created("", diet);
        }

        //GET: api/diet/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Diets.ToList());

        //GET: api/diet/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            Diet diet = _context.Diets.Find(id);
            if (diet == null)
            {
                return NotFound();
            }
            return Ok(diet);
        }

        //DELETE: /api/diet/delete/bolacha
        [HttpDelete]
        [Route("delete/{title}")]
        public IActionResult Delete([FromRoute] string title)
        {
            //Expressão lambda
            //Buscar um objeto na tabela de diets com base no nome
            Diet diet = _context.Diets.FirstOrDefault(diet => diet.Title == title);

            if (diet == null)
            {
                return NotFound();
            }
            _context.Diets.Remove(diet);
            _context.SaveChanges();
            return Ok(_context.Diets.ToList());
        }


        //PUT: api/diet/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Diet diet)
        {
            _context.Diets.Update(diet);
            _context.SaveChanges();
            return Ok(diet);
        }
    }
}