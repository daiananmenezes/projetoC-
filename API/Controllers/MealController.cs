using System;
using System.Collections.Generic;
using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/meal")]
    public class MealController : ControllerBase
    {
        private readonly DataContext _context;
        public MealController(DataContext context)
        {
            _context = context;
        }

        //POST: api/meal/create
        [HttpPost]
        [Route("create")]
        public IActionResult Create([FromBody] Meal meal)
        {
            _context.Meals.Add(meal);
            _context.SaveChanges();
            return Created("", meal);
        }

        //GET: api/meal/list
        [HttpGet]
        [Route("list")]
        public IActionResult List() => Ok(_context.Meals.ToList());

        //GET: api/meal/getbyid/1
        [HttpGet]
        [Route("getbyid/{id}")]
        public IActionResult GetById([FromRoute] int id)
        {
            Meal meal = _context.Meals.Find(id);
            if (meal == null)
            {
                return NotFound();
            }
            return Ok(meal);
        }

        //DELETE: /api/meal/delete/bolacha
        [HttpDelete]
        [Route("delete/{description}")]
        public IActionResult Delete([FromRoute] string description)
        {
            //Expressão lambda
            //Buscar um objeto na tabela de meals com base no nome
            Meal meal = _context.Meals.FirstOrDefault(meal => meal.Descricao == description);

            if (meal == null)
            {
                return NotFound();
            }
            _context.Meals.Remove(meal);
            _context.SaveChanges();
            return Ok(_context.Meals.ToList());
        }


        //PUT: api/meal/update
        [HttpPut]
        [Route("update")]
        public IActionResult Update([FromBody] Meal meal)
        {
            _context.Meals.Update(meal);
            _context.SaveChanges();
            return Ok(meal);
        }
    }
}