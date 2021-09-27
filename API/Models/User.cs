using System;

namespace API.Models
{
    public class User
    {
        //Construtor
        public User() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Nome { get; set; }
        public string Email { get; set; }
        public string Objetivo { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Nome: {Nome} | Email: {Email} | Objetivo: {Objetivo} | Criado em: {CriadoEm}";
    }
}