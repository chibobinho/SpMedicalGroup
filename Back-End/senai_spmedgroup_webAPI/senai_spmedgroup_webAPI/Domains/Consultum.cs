﻿using System;
using System.Collections.Generic;

#nullable disable

namespace senai_spmedgroup_webAPI.Domains
{
    public partial class Consultum
    {
        public int IdConsulta { get; set; }
        public int? IdMedico { get; set; }
        public int? IdPaciente { get; set; }
        public string Situacao { get; set; }
        public DateTime DataConsulta { get; set; }
        public decimal? Valor { get; set; }
        public string Descricao { get; set; }

        public virtual Medico IdMedicoNavigation { get; set; }
        public virtual Paciente IdPacienteNavigation { get; set; }
        public virtual Situacao SituacaoNavigation { get; set; }
    }
}
