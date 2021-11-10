using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using senai_spmedgroup_webAPI.Domains;
using senai_spmedgroup_webAPI.Interfaces;
using senai_spmedgroup_webAPI.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_spmedgroup_webAPI.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class ConsultumController : ControllerBase
    {
        private IConsultumRepository _consultumRepository { get; set; }

        public ConsultumController()
        {
            _consultumRepository = new ConsultumRepository();
        }

        [Authorize(Roles = "1")]
        [HttpGet("{idConsulta}")]
        public IActionResult BuscarPorId(int idConsulta)
        {
            return Ok(_consultumRepository.BuscarPorId(idConsulta));
        }

        [Authorize(Roles = "2")]
        [HttpGet("{idMedico}")]
        public IActionResult BuscarConsultaMed(int idMedico)
        {
            return Ok(_consultumRepository.BuscarPorId(idMedico));
        }

        [Authorize(Roles = "3")]
        [HttpGet("{idPaciente}")]
        public IActionResult BuscarConsultaPac(int idPaciente)
        {
            return Ok(_consultumRepository.BuscarPorId(idPaciente));
        }

        [Authorize(Roles = "1")]
        [HttpPost]
        public IActionResult Cadastrar(Consultum novaConsulta)
        {
            _consultumRepository.Cadastrar(novaConsulta);
            return StatusCode(201);
        }

        [Authorize(Roles = "1")]
        [HttpPut("{idConsulta}")]
        public IActionResult Atualizar(int idConsulta, Consultum consultaAtualizada)
        {
            _consultumRepository.Atualizar(idConsulta, consultaAtualizada);
            return StatusCode(204);
        }

        [Authorize(Roles = "1,2")]
        [HttpPut("{idConsulta}")]
        public IActionResult AtualizarDescricao(int idConsulta, Consultum consultaAtualizada)
        {
            _consultumRepository.Atualizar(idConsulta, consultaAtualizada);
            return StatusCode(204);
        }
    }
}
