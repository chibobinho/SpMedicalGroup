using senai_spmedgroup_webAPI.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_spmedgroup_webAPI.Interfaces
{
    /// <summary>
    /// Interface responsável pela ClinicaRepository
    /// </summary>
    interface IClinicaRepository
    {
        /// <summary>
        /// Lista de todas as clinicas
        /// </summary>
        /// <returns>Uma lista de clinicas</returns>
        List<Clinica> Listar();

        /// <summary>
        /// Busca uma clinica através do seu ID
        /// </summary>
        /// <param name="idClinica">ID da clinica que será buscada</param>
        /// <returns>Uma clinica encontrada</returns>
        Clinica BuscarPorId(int idClinica);

        /// <summary>
        /// Cadastra uma nova clinica
        /// </summary>
        /// <param name="novaClinica">Objeto novaClinica com as informações</param>
        void Cadastrar(Clinica novaClinica);

        /// <summary>
        /// Atualiza os dados da clinica existente
        /// </summary>
        /// <param name="idClinica">ID da clinica que será atualizada</param>
        /// <param name="clinicaAtualizada">objeto clinicaAtualizada com as novas informações</param>
        void Atualizar(int idClinica, Clinica clinicaAtualizada);

        /// <summary>
        /// Deleta uma clinica existente
        /// </summary>
        /// <param name="idClinica">ID da clinica que será deletada</param>
        void Deletar(int idClinica);
    }
}
