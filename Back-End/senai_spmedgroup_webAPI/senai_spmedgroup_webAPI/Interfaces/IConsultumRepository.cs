using senai_spmedgroup_webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_spmedgroup_webAPI.Interfaces
{
    interface IConsultumRepository
    {
        /// <summary>
        /// Retorna todos os objetos cadastrados
        /// </summary>
        /// <returns>Uma lista de objetos</returns>
        List<Consultum> ListarTodos();

        /// <summary>
        /// Cadastra uma nova consulta
        /// </summary>
        /// <param name="novaConsulta">Objeto novaConsultum com as informações</param>
        void Cadastrar(Consultum novaConsulta);

        /// <summary>
        /// Atualiza os dados da consulta existente (cancelamento e descrição)
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será atualizada</param>
        /// <param name="consultaAtualizada">objeto consultaAtualizada com as novas informações</param>
        void Atualizar(int idConsulta, Consultum consultaAtualizada);

        /// <summary>
        /// Atualiza os dados da consulta existente (cancelamento e descrição)
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será atualizada</param>
        /// <param name="consultaAtualizada">objeto consultaAtualizada com as novas informações</param>
        void AtualizarDescricao(int idConsulta, Consultum consultaAtualizada);

        /// <summary>
        /// Busca uma consulta através do seu ID
        /// </summary>
        /// <param name="idConsulta">ID da consulta que será buscada</param>
        /// <returns>Uma consulta encontrada</returns>
        Consultum BuscarPorId(int idConsulta);

        /// <summary>
        /// Busca uma consulta do médico
        /// </summary>
        /// <param name="idConsulta">ID do médico que será buscado</param>
        /// <returns>Consulta encontrada</returns>
        Consultum BuscarConsultaMed(int idMedico);

        /// <summary>
        /// Busca uma consulta de pacinete
        /// </summary>
        /// <param name="idConsulta">ID do paciente que será buscado</param>
        /// <returns>Consulta encontrada</returns>
        Consultum BuscarConsultaPac(int idPaciente);
    }
}
