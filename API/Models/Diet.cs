using System;

namespace API.Models
{
    public class Diet
    {
        //Construtor
        public Diet() => CriadoEm = DateTime.Now;
        public int Id { get; set; }
        public string Title { get; set; }
        public string Objetivo { get; set; }
        public DateTime DataInicio { get; set; }
        public DateTime DataFim { get; set; }
        public DateTime CriadoEm { get; set; }

        public override string ToString() =>
            $"Objetivo: {Objetivo} | Data inicio: {DataInicio} | Data fim: {DataFim} | Criado em: {CriadoEm}";
    }
}