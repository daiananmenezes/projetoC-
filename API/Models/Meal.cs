using System;

namespace API.Models
{
    public class Meal
    {
        //Construtor
        public Meal() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Descricao { get; set; }
        public string Refeicao { get; set; }
        public string Horario { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Descricao: {Descricao} | Refeicao: {Refeicao} | Criado em: {CriadoEm}";
    }
}