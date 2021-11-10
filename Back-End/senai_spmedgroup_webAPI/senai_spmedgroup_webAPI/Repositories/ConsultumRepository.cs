using senai_spmedgroup_webAPI.Contexts;
using senai_spmedgroup_webAPI.Domains;
using senai_spmedgroup_webAPI.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace senai_spmedgroup_webAPI.Repositories
{
    public class ConsultumRepository : IConsultumRepository
    {
        SpMedGroupContex ctx = new SpMedGroupContex();

        public void Atualizar(int idConsulta, Consultum consultaAtualizada)
        {
            Consultum consultaBuscada = BuscarPorId(idConsulta);

            if (consultaAtualizada.Situacao != null)
            {
                consultaBuscada.Situacao = consultaBuscada.Situacao;
            }
            ctx.Consulta.Update(consultaBuscada);
            ctx.SaveChanges();
        }

        public void AtualizarDescricao(int idConsulta, Consultum consultaAtualizada)
        {
            Consultum consultaBuscada = BuscarPorId(idConsulta);

            if (consultaAtualizada.Descricao == null)
            {
                consultaBuscada.Descricao = consultaBuscada.Descricao;
            }
            ctx.Consulta.Update(consultaBuscada);
            ctx.SaveChanges();
        }

        public Consultum BuscarPorId(int idConsulta)
        {
            return ctx.Consulta.FirstOrDefault(u => u.IdConsulta == idConsulta);
        }

        public List<Consultum> ListarTodos()
        {
            return ctx.Consulta.ToList();
        }

        public Consultum BuscarConsultaMed(int idMedico)
        {
            return ctx.Consulta.FirstOrDefault(u => u.IdMedico == idMedico);
        }

        public Consultum BuscarConsultaPac(int idPaciente)
        {
            return ctx.Consulta.FirstOrDefault(u => u.IdPaciente == idPaciente);
        }

        public void Cadastrar(Consultum novaConsulta)
        {
            ctx.Consulta.Add(novaConsulta);
            ctx.SaveChanges();
        }
    }
}
