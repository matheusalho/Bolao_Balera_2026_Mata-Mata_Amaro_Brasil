/* ============================================================================
 * Configuração do Ranking (Amaro / Intranet) — VERSÃO "JOGOS DO BRASIL"
 * Mesmo código/planilha/fluxos; dados filtrados aos jogos do Brasil.
 * Observação: na versão Brasil a publicação de resultados fica DESLIGADA
 * (os resultados são publicados pelo app Amaro completo, para não apagar os
 * demais jogos da aba "Resultados"). Aqui é só visualização + exportação.
 * ========================================================================== */
window.APP_VARIANT = 'amaro';
window.BRASIL_ONLY = true;

window.READ_ENDPOINT = 'https://defaulta4a0857a652e45f494b1685bad4ec3.bd.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/87f99646bea44827ac259babc7de547d/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=R3He56VcrkszdSsEyDA4niPMG-Ilz6ByPArrcUDpuLE';
window.WRITE_RESULTS_ENDPOINT = 'https://defaulta4a0857a652e45f494b1685bad4ec3.bd.environment.api.powerplatform.com:443/powerautomate/automations/direct/workflows/ea5dc72a7210439c9f54be22dc43b04a/triggers/manual/paths/invoke?api-version=1&sp=%2Ftriggers%2Fmanual%2Frun&sv=1.0&sig=rr_kfLZBPyOFP339Qy9zVLlBE6ThQ2EliP54l1AT5O4';

window.PALPITES_URL = 'https://matheusalho.github.io/Palpites_Mata-Mata_Brasil/';
window.SHARE_URL_LABEL = 'matheusalho.github.io/Palpites_Mata-Mata_Brasil';
