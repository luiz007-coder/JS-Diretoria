document.getElementById("ano").textContent = new Date().getFullYear();
      let currentTopic = 'PESSOAS';
      let analiseCount = 1;
      document.addEventListener("DOMContentLoaded", function () {
          const dropdown = document.querySelector(".custom-dropdown");
          const toggle = document.querySelector(".dropdown-toggle");
          const menu = document.querySelector("#main_dropdown_menu");
          const topicButtons = document.querySelectorAll(".topic-btn");
          toggle.addEventListener("click", function() {
              dropdown.classList.toggle("dropdown-open");
          });
          topicButtons.forEach(button => {
              button.addEventListener("click", function() {
                  topicButtons.forEach(btn => btn.classList.remove('active'));
                  this.classList.add('active');
                  currentTopic = this.getAttribute('data-topic');
                  updateDropdownOptions();
              });
          });
          function updateDropdownOptions() {
              const allOptions = menu.querySelectorAll('.dropdown-option');
              allOptions.forEach(option => {
                  if (option.getAttribute('data-topic') === currentTopic) {
                      option.style.display = 'flex';
                  } else {
                      option.style.display = 'none';
                  }
              });
              document.getElementById("selected_text").textContent = 'Selecione o material desejado';
              document.querySelectorAll(".card").forEach(card => {
                  card.classList.remove('show');
                  card.style.display = 'none';
              });
              document.querySelectorAll('.button input[type="submit"]').forEach(btn => {
                  btn.style.display = 'none';
              });
          }
          updateDropdownOptions()
          initCustomDropdowns();
          const floatingMessage = document.getElementById("aviso");
          const closeButton = document.getElementById("f-aviso");
          const decorElement = document.querySelector('.decor-direita');
          if (closeButton && floatingMessage) {
              closeButton.addEventListener("click", function () {
                  floatingMessage.classList.add('closing');
                  decorElement.classList.add('closing');
                  floatingMessage.addEventListener('animationend', () => {
                      floatingMessage.style.display = "none";
                  }, { once: true });
                  decorElement.addEventListener('animationend', () => {
                      decorElement.style.display = "none";
                  }, { once: true });
              });
              setTimeout(() => {
                  floatingMessage.classList.add('closing');
                  decorElement.classList.add('closing');
              }, 15000);
          }
      });
      function initCustomDropdowns() {
          const dropdownButton = document.getElementById('main_dropdown_button');
          const dropdownMenu = document.getElementById('main_dropdown_menu');
          if (dropdownButton) {
              dropdownButton.addEventListener('click', function() {
                  dropdownMenu.classList.toggle('active');
                  this.classList.toggle('active');
              });
          }
          document.querySelectorAll('.button input[type="submit"]').forEach(btn => {
              btn.style.display = 'none';
          });
          
          document.querySelectorAll('#main_dropdown_menu .dropdown-option').forEach(option => {
              option.addEventListener('click', function() {
                  const value = this.getAttribute('data-value');
                  const text = this.textContent.trim();
                  document.getElementById("selected_text").textContent = text;
                  dropdownMenu.classList.remove('active');
                  dropdownButton.classList.remove('active');
                  document.querySelector('.custom-dropdown').classList.remove('dropdown-open');
                  document.querySelectorAll('#main_dropdown_menu .dropdown-option').forEach(opt => {
                      opt.classList.remove('selected');
                  });
                  this.classList.add('selected');
                  document.querySelectorAll(".card").forEach(card => {
                      card.classList.remove('show');
                      card.style.display = 'none';
                  });
                  document.querySelectorAll('.button input[type="submit"]').forEach(btn => {
                      btn.style.display = 'none';
                  });
                  if (value) {
                      const targetCard = document.getElementById(value);
                      if (targetCard) {
                          targetCard.classList.add('show');
                          targetCard.style.display = 'block';
                          const submitBtn = targetCard.querySelector('.button input[type="submit"]');
                          if (submitBtn) {
                              submitBtn.style.display = 'block';
                          }
                      }
                  }
              });
          });
          document.addEventListener('click', function(e) {
              if (!e.target.closest('.custom-dropdown')) {
                  document.querySelectorAll('.dropdown-menu').forEach(menu => {
                      menu.classList.remove('active');
                  });
                  document.querySelectorAll('.dropdown-button').forEach(btn => {
                      btn.classList.remove('active');
                  });
              }
          });
      }
      function selectOption(button, targetId, value) {
          const container = button.parentElement;
          const buttons = container.querySelectorAll('.form-selector-button');
          buttons.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
          document.getElementById(targetId).value = value;
      }
      function selectVeredicto(button, inputId, value) {
          const container = button.parentElement;
          const buttons = container.querySelectorAll('.form-selector-button');
          buttons.forEach(btn => btn.classList.remove('selected'));
          button.classList.add('selected');
          document.getElementById(inputId).value = value;
      }

      function enviarAnaliseIndeferida(e) {
            e.preventDefault();
            var username = document.getElementById("username_indeferida").value;
            if (!username) {
                alert('Preencha o nome do usuário!');
                return;
            }
            
            let analiseValida = false;
            let analisesBBCode = '';
            
            for (let i = 1; i <= analiseCount; i++) {
                const veredito = document.getElementById(`veredito_${i}`);
                const nickname = document.getElementById(`nickname_${i}`);
                const comentario = document.getElementById(`comentario_${i}`);
                
                if (veredito && nickname && comentario && 
                    veredito.value && nickname.value.trim() && comentario.value.trim()) {
                    
                    analiseValida = true;
                    
                    if (veredito.value === 'Deferido') {
                        analisesBBCode += `[table style="width: 80px; border-radius: 5px!Important; overflow: hidden;border: none !important; border-radius: 5px; padding-top: 10px;position: relative;top: 2.4em; left: 4.5em;margin: -3em; display: ruby-text; z-index: 10;" bgcolor="green"][tr style="overflow: hidden; border: none!important;"][td style="overflow: hidden; border: none!important; padding-top: 25px;"][color=white]<i class="fas fa-check"></i> DEFERIDO[/color][/td][/tr][/table]
        [table style="overflow: hidden; border: none!important; box-shadow: 0 0 0 1px green; border-radius: 5px!Important;"][tr style="overflow: hidden; border: none!important; border-radius: 5px!important;"][td style="overflow: hidden; border: none!important;"]

        [table style='z-index: 999;margin-top: -67px;width: max-content;position: relative;overflow: hidden;border: none!important;border-radius: 15px!important;padding: 0;top: 40px;' bgcolor='green'][tr style='border: none!important; overflow: hidden;'][td style='border: none!important; padding: 0;'][center][img]https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user=${nickname.value}&direction=2&head_direction=2&size=m&headonly=1[/img][/center][/td][/tr][/table]
        [table style='margin-bottom: 9px;width: max-content;max-width: 100%;padding: 0;line-height: 0;border: none!important;box-shadow: 0 0 0 1px green;border-radius: 150px!important;position: relative;z-index: 0;left: 42px;top: -20px; margin-bottom: -31px;'][tr style='border: none!important;'][td style=' border: none!important;'][left][b]Diretor(a)[/b] ${nickname.value}[/left][/td][/tr][/table]

        [justify]${comentario.value}[/justify][/td][/tr][/table]
        `;
                    } else {
                        analisesBBCode += `[table style="width: 80px; border-radius: 5px!Important; overflow: hidden;border: none !important; border-radius: 5px; padding-top: 10px;position: relative;top: 2.4em; left: 4.5em;margin: -3em; display: ruby-text; z-index: 10;" bgcolor="red"][tr style="overflow: hidden; border: none!important;"][td style="overflow: hidden; border: none!important; padding-top: 25px;"][color=white]<i class="fas fa-times"></i> INDEFERIDO[/color][/td][/tr][/table]

        [table style="overflow: hidden; border: none!important; box-shadow: 0 0 0 1px red; border-radius: 5px!Important;"][tr style="overflow: hidden; border: none!important; border-radius: 5px!important;"][td style="overflow: hidden; border: none!important;"]
        [table style='z-index: 999;margin-top: -67px;width: max-content;position: relative;overflow: hidden;border: none!important;border-radius: 15px!important;padding: 0;top: 40px;' bgcolor='red'][tr style='border: none!important; overflow: hidden;'][td style='border: none!important; padding: 0;'][center][img]https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=png&user=${nickname.value}&direction=2&head_direction=2&size=m&headonly=1[/img][/center][/td][/tr][/table]
        [table style='margin-bottom: 9px;width: max-content;max-width: 100%;padding: 0;line-height: 0;border: none!important;box-shadow: 0 0 0 1px red;border-radius: 150px!important;position: relative;z-index: 0;left: 42px;top: -20px; margin-bottom: -31px;'][tr style='border: none!important;'][td style=' border: none!important;'][left][b]Diretor(a)[/b] ${nickname.value}[/left][/td][/tr][/table]

        [justify]${comentario.value}[/justify][/td][/tr][/table]
        `;
                    }
                }
            }
            
            if (!analiseValida) {
                alert('Preencha pelo menos uma análise completa (veredito, nickname e comentário)!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE ANÁLISE INDEFERIDA[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe que sua solicitação de análise de avanço foi [b][color=#65b026]indeferida[/color][/b]. Em caso de insatisfação com o resultado, é possível protocolar recurso na Central de Sindicâncias para análise da Presidência do órgão ou recorrer diretamente à segunda instância. Seguem as análises abaixo, uma vez que a solicitação precisou ser apreciada por colegiado, devido à inexistência de diretores ativos no seu turno.[/justify][/font][/color]

        [table  style="z-index: 99;margin-top: -56px;top: 41px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]EXPOSIÇÃO DE ANÁLISES[/b][/color][/font][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 25px;"][color=white][justify][font=Poppins]${analisesBBCode}[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]

        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Carta de Análise Indeferida", username, mp);
        }

        function addAnalise() {
            if (analiseCount >= 5) {
                alert('Máximo de 5 análises permitidas!');
                return;
            }
            analiseCount++;
            const container = document.getElementById('analises_container');
            const newAnalise = document.createElement('div');
            newAnalise.className = 'analise-item';
            newAnalise.innerHTML = `
                <button type="button" class="remove-analise-btn" onclick="removerAnalise(this)">×</button>
                <h4>Análise ${analiseCount}</h4>
                <div class="input-box">
                    <span class="details_span">VEREDITO</span>
                    <div class="form-selector-container">
                        <div class="input-row">
                            <button type="button" class="form-selector-button deferido" onclick="selectVeredicto(this, 'veredito_${analiseCount}', 'Deferido')">Deferido</button>
                            <button type="button" class="form-selector-button indeferido" onclick="selectVeredicto(this, 'veredito_${analiseCount}', 'Indeferido')">Indeferido</button>
                        </div>
                    </div>
                    <input type="hidden" id="veredito_${analiseCount}" name="veredito_${analiseCount}" required>
                </div>
                <div class="input-row">
                    <div class="input-box">
                        <span class="details_span">NICK DO DIRETOR</span>
                        <input type="text" id="nickname_${analiseCount}" placeholder="Digite o nickname" required>
                    </div>
                </div>
                <div class="input-box">
                    <span class="details_span">COMENTÁRIO</span>
                    <textarea id="comentario_${analiseCount}" rows="3" placeholder="Digite o comentário da análise" required></textarea>
                </div>
            `;
            container.appendChild(newAnalise);
            if (analiseCount >= 5) {
                document.getElementById('add_analise_btn').style.display = 'none';
            }
        }

        function removerAnalise(button) {
            const analiseItem = button.closest('.analise-item');
            if (analiseItem) {
                analiseItem.remove();
                analiseCount--;
                updateAnaliseNumbers();
                if (analiseCount < 5) {
                    document.getElementById('add_analise_btn').style.display = 'block';
                }
            }
        }

        function updateAnaliseNumbers() {
            const analises = document.querySelectorAll('#analises_container .analise-item');
            analises.forEach((analise, index) => {
                const h4 = analise.querySelector('h4');
                if (h4) {
                    h4.textContent = `Análise ${index + 1}`;
                }
            });
        }

      function enviarAnaliseNegada(e) {
            e.preventDefault();
            var username = document.getElementById("username_negada").value;
            var motivosSelecionados = [];
            document.querySelectorAll('#analise_negada input[type="checkbox"]:checked').forEach(checkbox => {
                motivosSelecionados.push(checkbox.value);
            });
            
            if (!username || motivosSelecionados.length === 0) {
                alert('Preencha o nome do usuário e selecione pelo menos um motivo!');
                return;
            }

            var motivoTexto = motivosSelecionados.join('; ');
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE ANÁLISE NEGADA[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe que sua solicitação de análise de avanço foi [b][color=#65b026]negada devido à ausência de um ou mais dos requisitos obrigatórios[/color][/b] para a solicitação ser considerada para análise. No seu caso, a problemática foi devido exposto abaixo:

        [center][table style='margin-bottom: 9px;width: max-content;max-width: 100%;padding: 0;line-height: 0;border: none!important;box-shadow: 0 0 0 1px #65b026;border-radius: 150px!important;position: relative;z-index: 0;top: -5px;'][tr style='border: none!important;'][td style=' border: none!important;'][left]${motivoTexto}.[/left][/td][/tr][/table][/center]
        Quando todos os requisitos forem sanados e após o prazo de 7 dias contados do envio desta mensagem privada, você poderá solicitar novamente a análise para a Diretoria do Corpo Executivo.[/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Carta de Análise Negada", username, mp);
        }
      function enviarRegressoEspecializacao(e) {
            e.preventDefault();
            var username = document.getElementById("username_regresso").value;
            var novaEspecializacao = document.getElementById("nova_especializacao").value;
            var linkComprovacao = document.getElementById("link_comprovacao").value;
            var motivosSelecionados = [];
            var precisaAnexo = false;
            var motivoAnalise = false;
            
            document.querySelectorAll('#regresso_especializacao input[type="checkbox"]:checked').forEach(checkbox => {
                motivosSelecionados.push(checkbox.value);
                
                const precisaAnexoCheck = checkbox.getAttribute('data-anexo') === 'true';
                if (precisaAnexoCheck) {
                    precisaAnexo = true;
                }

                if (checkbox.value.includes('Avaliação Mensal') || checkbox.value.includes('Análise de Regresso')) {
                    motivoAnalise = true;
                }
            });
            
            if (!username || !novaEspecializacao || motivosSelecionados.length === 0) {
                alert('Preencha todos os campos obrigatórios!');
                return;
            }
            
            if (precisaAnexo && !linkComprovacao) {
                alert('É necessário fornecer o link de comprovação para o(s) motivo(s) selecionado(s)!');
                return;
            }

            var motivoTexto = motivosSelecionados.join('; ');
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE REGRESSO DA ESPECIALIZAÇÃO[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que você sofreu um regresso de especialização. Portanto, agora, você se torna portador da [b][color=#65b026]${novaEspecializacao}[/b][/color]. Nós, da Diretoria do Corpo Executivo, lamentamos o seu regresso e informamos que pode sempre contar conosco na busca por melhorias e no esclarecimento de dúvidas. Abaixo seguem os motivos expostos que levaram ao seu regresso.

        [center][table style='margin-bottom: 9px;width: max-content;max-width: 100%;padding: 0;line-height: 0;border: none!important;box-shadow: 0 0 0 1px #65b026;border-radius: 150px!important;position: relative;z-index: 0;top: -5px;'][tr style='border: none!important;'][td style=' border: none!important;'][left]${motivoTexto}.[/left][/td][/tr][/table][/center]`;

            if (!motivoAnalise && precisaAnexo && linkComprovacao) {
                mp += `\n[url=${linkComprovacao}][table  style="z-index: 99;margin-top: -53px;top: 10px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]ANEXOS[/b][/color][/font][/td][/tr][/table][/url]\n`;
            } else if (motivoAnalise) {
                mp += `\nA fundamentação do seu regresso, de forma mais detalhada, decorre do resultado da Avaliação Mensal ou da Análise de Regresso, da qual você já está ciente, seja por meio da intimação recebida ou pelos comentários e vereditos divulgados na Central de Avaliações.\n`;
            }

            mp += `\nSe não concordar com o seu regresso, você poderá interpor recurso, acessando a [url=https://www.policiarcc.com/t38726-ce-central-de-sindicancias][b][color=#65b026][CE] Central de Sindicâncias.[/b][/color][/url][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Regresso de Especialização", username, mp);
        }

      function enviarCartaObservacao(e) {
            e.preventDefault();
            var username = document.getElementById("username_observacao").value;
            if (!username) {
                alert('Preencha o nome do usuário!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE OBSERVAÇÃO[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe que, conforme a avaliação realizada, foi atribuído a você o [b][color=#65b026]veredito de observação[/b][/color], seja por prevalência ou por maioria. Em decorrência desse veredito, sua promoção encontra-se [b][color=#65b026]bloqueada pelo prazo de 07 (sete) dias[/b][/color], contados a partir da data desta Mensagem Privada.

        Durante esse período, você deverá ser acompanhado por um [b][color=#65b026]membro do Esquadrão do Corpo Executivo ou da Diretoria do Corpo Executivo[/b][/color], devendo, para tanto, entrar em contato com um de seus membros.

        Caso não deseje o acompanhamento, este é um direito seu. No entanto, ficará sob sua responsabilidade resolver os pontos em déficit indicados na avaliação. Se não concordar com alguma nota, comentário ou com o próprio veredito, você poderá interpor recurso, acessando a [url=https://www.policiarcc.com/t38726-ce-central-de-sindicancias][b][color=#65b026][CE] Central de Sindicâncias.[/b][/color][/url][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Carta de Observação", username, mp);
        }
      function enviarCartaAdvertencia(e) {
          e.preventDefault();
          var username = document.getElementById("username_advertencia").value;
          var dataInicial = document.getElementById("data_inicial").value;
          var dataFinal = document.getElementById("data_final").value;
          var motivo = document.getElementById("motivo_advertencia").value;
          var linkAdvertencia = document.getElementById("link_advertencia").value;
          if (!username || !dataInicial || !dataFinal || !motivo || !linkAdvertencia) {
              alert('Preencha todos os campos!');
              return;
          }
          var mp = `[table  style="border: none!important; overflow: hidden; border-radius: 5px; line-height: 0.1em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden"][table  style="border: none!important; overflow: hidden; border-radius: 5px; line-height: 0.6em; margin: -10px;" bgcolor="#212121"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden"][img]https://i.imgur.com/8RaCNua.png[/img]
      [table  style="border: none!important; border-radius: 5px; overflow: hidden; width: 40%; margin: -2% auto; top: 0.8em; position: relative; z-index: 10; justify-content: center; box-shadow: -8px 0px 0px 0px #4b8410, 1px 4px 16px 0px #53891b6e, -1px -4px 14px 0px #00ff1473;" bgcolor="#65b026"][tr style="border: none!important;"][td style="border: none!important;"][center][color=white][b][size=16][font=Poppins]CARTA DE ADVERTÊNCIA INTERNA[/font][/size][/b][/color][/center][/td][/tr][/table]

      [table  style="width: 100%; border-radius: 5px; border-bottom: none!important; border-top: none!Important; border-right: none!important; border-left: 5px solid #65b026!important; overflow: hidden; position: relative; z-index: 1;line-height: 1.6em; margin: 0 auto; border-top: 3px solid #212121!important; box-shadow: -8px 0px 0px 0px #65b026;" bgcolor="#ffffff"][tr style="border: none!important; overflow: hidden"][td style="border: none!important; overflow: hidden"]
      [font=Poppins][center][b][color=#4b8410]Saudações, {USERNAME}![/color][/b][/center]
          
      [justify]Informo-lhe, através desta Mensagem Privada, que você recebeu uma [b]advertência interna[/b] no [b][Esp.III] Quadro de Advertências[/b] devido a/ao [b]${motivo}[/b]. Quaisquer dúvidas ou vindicações, procure a [b]Presidência da Diretoria do Corpo Executivo[/b].
          
      [b]Início/Término da Advertência:[/b] ${dataInicial} até ${dataFinal}
      [b]Comprovação:[/b] [url=${linkAdvertencia}]Clique aqui.[/url][/justify][/font][/td][/tr][/table]


      [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
      [/td][/tr][/table][/td][/tr][/table]`;
          showLoading("Enviando");
          send_MP("[DIR] Carta de Advertência Interna", username, mp);
      }
      function enviarPromocao(e) {
            e.preventDefault();
            var username = document.getElementById("username_promocao").value;
            
            if (!username) {
                alert('Preencha o nome do usuário!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE PROMOÇÃO[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe que você foi [b][color=#65b026]promovido[/b][/color] pela Diretoria do Corpo Executivo, em razão do veredito obtido na última avaliação mensal. Parabenizamos-lhe pela promoção, fruto de seu desempenho, dedicação e comprometimento com as atribuições exercidas, desejando-lhe êxito e continuidade no excelente trabalho desempenhado.

        Para consultar os fundamentos e os vereditos da referida avaliação, acesse o [url=https://www.policiarcc.com/t38299-diario-oficial-diretoria-resultado-da-avaliacao-quinzenal-de-especializacao-intermediaria][b][color=#65b026][Diário Oficial] - Diretoria: Resultado da Avaliação Mensal de Especialização Intermediária.[/b][/color][/url][/justify][/font][/color]

        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Promoção", username, mp);
        }
      function enviarAvancoEspecializacaoII(event) {
            event.preventDefault();
            var username = document.getElementById("username_avanco_ii").value;
            if (!username) {
                alert('Preencha o nome do usuário!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE AVANÇO DA ESPECIALIZAÇÃO[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe que o(a) parabenizamos pelo seu avanço da especialização para a [b][color=#65b026]Especialização Intermediária[/b][/color]. 

        Ao ser adicionado ao subfórum [b][color=#65b026][Corpo Executivo] Corpo de Oficiais[/b][/color], deverá realizar, obrigatoriamente, a leitura dos seguintes tópicos: [b][color=#65b026][CE] Código de Conduta das Especializações[/b][/color] e [b][color=#65b026][CE] Regulamento de Avaliações[/b][/color], localizado em [b][color=#65b026][Corpo Executivo] Central de Documentações e Manuais[/b][/color], devendo também, caso possua cargo de superintendente ou superior, ler o [b][color=#65b026][CE] Manual de Transferência de Conta[/b][/color], ressaltando-se que, a partir desse momento, você passará a assumir maiores responsabilidades, entre elas:
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]01[/b][/color][/td][/tr][/table] Manter seus turnos e tarefas atualizados, sob pena de advertência escrita, caso não atualize em até 48 horas;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]02[/b][/color][/td][/tr][/table] Manter presença em base, bom conhecimento sobre os documentos, pulso firme, rigidez, boa ortografia, postura, ajudar e gratificar seus subalternos, como todo e qualquer bom oficial;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]03[/b][/color][/td][/tr][/table] Ao promover, conferir corretamente os requisitos do promovido e, caso necessite, deter da permissão para tal;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]04[/b][/color][/td][/tr][/table] Acompanhar os resultados da [b]Avaliação Mensal[/b] em [url=https://www.policiarcc.com/t31688-diario-oficial-diretoria-central-de-avaliacoes][b][color=green][Diário Oficial] - Diretoria: Avaliações[/color][/b][/url] para manter-se nos padrões adequados da hierarquia;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]05[/b][/color][/td][/tr][/table] Não passar mais de 72 horas offline sem um pedido de licença da especialização no RCCSystem em: [url=https://system.policercc.com.br/especializacao/postagens][b][color=#65b026]Corpo Executivo > Postagem: Especialização[/color][/b][/url].[/justify][/font][/color]

        [table  style="z-index: 99;margin-top: -56px;top: 41px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]GRUPO DE COMUNICAÇÃO[/b][/color][/font][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]Atualmente, a Especialização Intermediária, dispõe de um grupo no WhatsApp, sendo gerenciado pela Diretoria do Corpo Executivo, para estimular a comunicação entre os oficiais sobre os assuntos pertinentes à instituição, de exemplo, é comum haver debates em base das palestras, dos acompanhamentos e outrem realizados por outros policiais. É importante que o portador saiba explorar esse grupo para exercer a comunicatividade e o interesse no que envolve sobre a polícia. Para entrar nesse grupo, o convite está disposto abaixo.[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [url=https://chat.whatsapp.com/HXdoHcxmn1PEVfqxJieOO6][table  style="z-index: 99;margin-top: -53px;top: 10px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]ENTRE NO GRUPO![/b][/color][/font][/td][/tr][/table][/url]
        [table  style="z-index: 99;margin-top: -56px;top: 60px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]ATIVIDADES QUINZENAIS[/b][/color][/font][/td][/tr][/table]
        [table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]A Diretoria do Corpo Executivo organiza atividades voltadas para o aperfeiçoamento dos portadores da especialização intermediária, como resoluções de casos, discussões e outras dinâmicas inovadoras. A data e horário das atividades são previamente notificadas por mensagem privada. Essas atividades são [b]obrigatórias[/b] e, portanto, a sua participação é indispensável.

        No entanto, caso não possa comparecer, é necessário justificar a ausência utilizando o formulário disponibilizado pelo órgão, o qual deve ser respondido num prazo de 24 horas a partir do horário inicial da atividade. Faltas não justificadas resultarão em advertência escrita por Abandono de Dever/Negligência.[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [table  style="z-index: 99;margin-top: -56px;top: 60px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]AVALIAÇÕES MENSAIS E CADASTRO[/b][/color][/font][/td][/tr][/table]
        [table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]A Diretoria do Corpo Executivo realiza, a cada mês, a avaliação mensal dos portadores da especialização intermediária. Nessa avaliação, você será avaliado conforme o cumprimento dos requisitos estabelecidos no [b][CE] Regulamento de Avaliações[/b] em [Corpo Executivo] Central de Documentações e Manuais, cuja documentação estará disponível quando adicionada ao subfórum.

        Além disso, superiores hierárquicos da especialização intermediária também podem avaliar seus subalternos, caso desejam e cumprir os requisitos. Para isso, basta acessar o tópico [b][CE] Cadastro ao Sistema de Avaliações[/b], localizado no subfórum [Corpo Executivo] Central de Avaliações dentro do fórum [Corpo Executivo] Corpo de Oficiais.[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [table  style="z-index: 99;margin-top: -56px;top: 60px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]FICHAMENTO POLICIAL[/b][/color][/font][/td][/tr][/table]
        [table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]Você [b]deve[/b] realizar seu [b]fichamento policial[/b] em até [b]48 horas[/b] a contar do recebimento desta Mensagem Privada, sob pena de [b]advertência escrita[/b] por [b]Abandono de Dever/Negligência[/b], caso não o faça. Para realizá-lo, [url=https://www.policiarcc.com/t36126-csi-fichamento-policial][b][color=white]clique aqui[/color][/b][/url].[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Carta de Avanço da Especialização [Esp.II]", username, mp);
        }

        function enviarAvancoEspecializacaoIII(event) {
            event.preventDefault();
            var username = document.getElementById("username_avanco_iii").value;
            if (!username) {
                alert('Preencha o nome do usuário!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE AVANÇO DA ESPECIALIZAÇÃO[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe que o(a) parabenizamos pelo seu avanço da especialização para a [b][color=#65b026]Especialização Avançada[/b][/color] e consequentemente entrar na [b][color=#65b026]Diretoria do Corpo Executivo[/b][/color]. 

        Essa conquista representa o reconhecimento pela sua dedicação, competência e comprometimento com a excelência do Corpo Executivo. Quando for adicionado ao subfórum [b][color=#65b026][Corpo Executivo] Diretoria.[/b][/color], deverá ler os tópicos [b][color=#65b026][DIR] Regimento Interno[/b][/color] e [b][color=#65b026][DIR] Procedimentos de Análises.[/b][/color], além dos manuais em [b][color=#65b026][DIR] Central de Manuais[/b][/color].

        A partir deste momento, além de manter os deveres e privilégios da especialização intermediária, você assume novas e importantes responsabilidades:
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]01[/b][/color][/td][/tr][/table] Possui o poder e o dever de avaliar mensalmente os executivos com Especialização Intermediária do seu turno;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]02[/b][/color][/td][/tr][/table] Deve responder às análises de avanço abertas para a Especialização Intermediária do seu turno;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]03[/b][/color][/td][/tr][/table] Tem autonomia para promover praças e oficiais de ambos os corpos, sem necessidade de permissão;[/justify][/font][/color]

        [table  style="z-index: 99;margin-top: -56px;top: 41px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]GRUPO DE COMUNICAÇÃO[/b][/color][/font][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]Atualmente, a Diretoria, dispõe de um grupo no WhatsApp, sendo gerenciado pela Presidência da Diretoria do Corpo Executivo, para estimular a comunicação entre os oficiais sobre os assuntos pertinentes à instituição. Para entrar nesse grupo, o convite está disposto abaixo.[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [url=https://chat.whatsapp.com/IyRlu91rTPeBQnLRRdFZ1S][table  style="z-index: 99;margin-top: -40px;top: 10px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]ENTRE NO GRUPO![/b][/color][/font][/td][/tr][/table][/url]
        [table  style="z-index: 99;margin-top: -56px;top: 60px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]AVALIAÇÕES MENSAIS E ANÁLISES DE AVANÇO[/b][/color][/font][/td][/tr][/table]
        [table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]A utilização de sua visão administrativa procura a identificação e a resolução de erros. Sendo assim, é necessário ter a percepção necessária para identificar as problemáticas, além disso, a capacidade necessária, através de sua proatividade, para resolvê-los da maneira correta, embasando suas decisões com os argumentos precisos. Logo, entende-se que, para utilizar a sua visão administrativa corretamente, é necessária uma avaliação minuciosa de seus subalternos, o desempenho apresentado por estes em todas as características necessárias. 

        De início, a fim de explorar e potencializar a sua visão administrativa e resolução de casos, a polícia conta com as avaliações mensais da Diretoria do Corpo Executivo, além das análises de avanço, onde deve avaliar o desempenho de seus subalternos ao longo do mês, enfatizando os pontos a serem melhorados e, corrigindo-os através da manutenção do Corpo. Neste prisma, um dos pontos fundamentais para a execução correta de sua avaliação ao longo do mês, é a organização dos dados expostos pelos seus subalternos, como: funções assumidas, atividades realizadas, promoções, gratificações e demais observações.

        A organização pode ser feita através de uma planilha com as características, provas e observações coletadas ou, por meio de um documento, onde deve adicionar/modificar/remover as informações necessárias. Além disso, a motivação para a organização é pautada na sua responsabilidade como superior na especialização, você é quem deve dar o feedback, suporte e ferramentas necessárias para o desenvolvimento de seu subalterno.

        E como faria isso sem se organizar? Portanto, utilize da organização dos fatos expostos pelos seus subalternos para uma avaliação precisa, justa e com suas opiniões transparecidas com embasamento de argumentos. Após a sua avaliação, converse com os seus subordinados para ter certeza de que entenderam os pontos supracitados por você acerca do trabalho apresentado por eles durante o mês. Em casos de maiores dificuldades observadas, apresente a sua visão administrativa para realizar atividades que potencializam e desenvolvem os seus subalternos sobre a característica em que apresentaram mau desempenho.

        Portanto, a avaliação de subalternos é um ponto principal para ser exercido pelos membros da Especialização Avançada, uma vez que são um dos responsáveis pela manutenção do Corpo Executivo, devem estar atentos às suas movimentações ao longo do tempo: acompanhamentos, auxílios e atividades realizadas, para executar o seu ponto de vista e trabalhar juntamente com os portadores da especialização intermediária, sendo, de fato, o líder que a Polícia Militar Revolução Contra o Crime precisa, ao formar executivos aptos para a continuidade da excelência buscada pela Especialização Intermediária

        [/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [table  style="z-index: 99;margin-top: -56px;top: 60px;right: -20px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: left;overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]SENSO CRÍTICO[/b][/color][/font][/td][/tr][/table]
        [table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]Como membro da Diretoria do Corpo Executivo, possui mais autonomia  para integrar novos policiais no Corpo de Oficiais, tanto no Corpo Executivo como também no Corpo Militar e aplicar medidas administrativas caso haja escassez de policiais nessa posição hierárquica. No entanto, não é o suficiente apenas saber dessas responsabilidades: é crucial entender como executá-las. Isso requer um aspecto fundamental em qualquer oficial: o senso crítico. Seja para conduzir movimentações hierárquicas, como promoções ou punições, ou para realizar avaliações mensais e resoluções de casos, o senso crítico é essencial.

        O senso crítico significa a capacidade de questionar e analisar de forma racional e inteligente. A palavra "crítico" vem de origem grega como "kritikos", que significa "a capacidade de fazer julgamentos". Esse significado da origem grega, é o que deve ser colocado em pauta para os portadores da especialização avançada. A habilidade para realizar avaliações críticas é importante para qualquer policial, mas a partir de possuir a especialização avançada, eles têm que dominar proficientemente para as ações realizadas estarem condizentes com os documentos e uma avaliação minuciosa em aspecto de meritocracia (isso se envolver promoções ou benefícios).

        O senso crítico também é fundamental para as avaliações dos portadores da especialização intermediária ministradas pela Diretoria do Corpo Executivo, afinal, é a partir desta característica, que poderá dar um veredito e a pontuação apropriada mediante aos comentários que você julgou ser a influência de serem tais na sua concepção. É importante ser imparcial, fazer o balanço de pontos positivos e negativos e dar o resultado mediante a situação que seu subalterno apresenta.

        O diretor tem a responsabilidade de avaliar tudo que envolve o subalterno na especialização, em todos os aspectos. É preciso ter abundantemente todas as evidências, informações ou testemunhas que possam notabilizar a capacidade de algum aspecto do subalterno. Se há por qualquer falha, seja uma ou mais, para existir no subalterno e que essas precisam ser dominadas naquele cargo ou na especialização, automaticamente, não é apto para ascender de cargo ou de especialização, mesmo que haja aspectos deste que o destaque dos demais.

        Além disso, para evitar discordâncias de visões, não que deve ser influenciado para impedir a promoção ou avanço de especialização  do seu subalterno, mas buscar o que outros superiores hierárquicos acham deste no turno que este subalterno escolheu no RCCSystem e se possuem provas de tais atos que podem ser obstáculos impeditivos para a ascensão. O portador da especialização avançada não deve tornar-se exclusivamente dependente de opiniões terceiras para decidir, deve confiar plenamente na sua capacidade de julgamento e  analisar todas as informações que estão disponíveis à mercê do policial.

        O subalterno precisa estar apto quando for promovê-lo, para assumir as responsabilidades como oficial e não possuir brechas que podem ser usadas para finalidade de cancelamento de subida do grau hierárquico, afinal, é sua responsabilidade de evitar esse tipo de caso, caso contrário, poderá surtir consequências negativas ao seu subalterno, como a desmotivação ou perca da produtividade e esforço. É importante ressaltar que os critérios de promoção ou avanço de especialização devem ser cuidadosamente examinados e considerar todos os aspectos relevantes, mesmo que não sejam o fator primordial que desencadeou a promoção ou avanço. Essa abordagem visa reduzir a margem para interpretações ambíguas, como mencionado anteriormente, e garantirá a aceitação por parte daqueles que revisam os motivos pelos quais a promoção foi aprovada e avançou. Os motivos devem abordar desempenho nos grupos de tarefas, comportamento, características dos oficiais, conhecimento de documentos e outros elementos pertinentes – existem critérios a se avaliar para avanço de especialização no tópico [b][CE] Guia de Critérios e Avaliações[/b] no qual devem ler ele -.[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Carta de Avanço da Especialização [Esp.III]", username, mp);
        }
      
      function enviarCartaTransparencia(event) {
            event.preventDefault();
            var username = document.getElementById("username_sindicancia").value;
            var nomeApelante = document.getElementById("nome_apelante").value;
            var nicknameReus = document.getElementById("nickname_reus").value;
            var codigoIdentificacao = document.getElementById("codigo_identificacao").value;
            var parecerSindicancia = document.getElementById("parecer_sindicancia").value;
            var comentarioFundamentacao = document.getElementById("comentario_fundamentacao").value;
            
            if (!username || !nomeApelante || !nicknameReus || !codigoIdentificacao || !parecerSindicancia || !comentarioFundamentacao) {
                alert('Preencha todos os campos!');
                return;
            }
            
            var parecerTexto = '';
            switch(parecerSindicancia) {
                case 'deferimento':
                    parecerTexto = 'deferimento';
                    break;
                case 'deferimento_parcial':
                    parecerTexto = 'deferimento parcial';
                    break;
                case 'indeferimento':
                    parecerTexto = 'indeferimento';
                    break;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE TRANSPARÊNCIA SINDICANCIAL[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta mensagem privada, informo-lhe, por meio desta carta, que a sindicância requerida por [b][color=#65b026]${nomeApelante}[/b][/color], na qualidade de apelante, sob o código de identificação [b][color=#65b026]${codigoIdentificacao}[/b][/color], tendo como réu(s) [b][color=#65b026]${nicknameReus}[/b][/color], foi devidamente analisada. Após apreciação, a Diretoria do Corpo Executivo, por decisão do colegiado, deliberou pelo [b][color=#65b026]${parecerTexto}[/b][/color] da solicitação.

        Se uma das ambas partes não estiver satisfeita com o parecer, você poderá interpor recurso à segunda instância, acessando o tópico [url=https://www.policiarcc.com/t34967-cor-protocolamento-de-recursos][b][color=#65b026][COR] Protocolamento de Recursos[/b][/color][/url].[/justify][/font][/color]

        [table  style="z-index: 99; margin-top: -55px; top: 40px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 40%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]FUNDAMENTAÇÃO DO COLEGIADO[/b][/color][/font][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]${comentarioFundamentacao}[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Carta de Transparência Sindicancial", username, mp);
        }
      
      function enviarCartaIntimacao(event) {
          event.preventDefault();
          var username = document.getElementById("username_intimacao").value;
          var tipoProcesso = document.getElementById("tipo_processo_intimacao").value;
          var motivo = document.getElementById("motivo_intimacao_texto").value;
          
          if (!username || !tipoProcesso || !motivo) {
              alert('Preencha todos os campos!');
              return;
          }
          
          var tipoTexto = tipoProcesso === 'análise de regresso' ? 'análise de regresso de especialização' : tipoProcesso;
          var tipoTitulo = tipoProcesso === 'análise de regresso' ? 'Análise de Regresso' : 'Sindicância';
          
          var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE INTIMAÇÃO[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
      [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

      Por meio desta mensagem privada, Informo-lhe, através desta intimação, que foi aberta uma [b][color=#65b026]${tipoTexto}[/color][/b] pelos motivos expostos abaixo. Sendo assim, você tem o prazo de [b][color=#65b026]24 horas[/color][/b] a partir do recebimento desta intimação para enviar sua defesa, caso queira. Em caso de o intimado encontrar-se em licença no momento do recebimento desta intimação, o prazo para resposta será de [b][color=#65b026]24 horas, contadas a partir de seu retorno da licença[/color][/b]. Havendo dúvidas, procure a Presidência da Diretoria do Corpo Executivo.[/justify][/font][/color]

      [table  style="z-index: 99; margin-top: -55px; top: 40px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 40%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]EXPOSIÇÃO DO CASO[/b][/color][/font][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins][spoiler=${tipoTitulo}]${motivo}[/spoiler][/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
      [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
      [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
          
          showLoading("Enviando");
          send_MP("[DIR] Carta de Intimação", username, mp);
      }

      function enviarCartaAbertura(event) {
          event.preventDefault();
          var tipoAnalise = document.getElementById("tipo_analise_abertura").value;
          var cargoNickname = document.getElementById("cargo_nickname_abertura").value;
          var dataLimite = document.getElementById("data_limite_abertura").value;
          var horarioLimite = document.getElementById("horario_limite_abertura").value;
          var linkTopico = document.getElementById("link_topico_abertura").value;
          
          if (!tipoAnalise || !cargoNickname || !dataLimite || !horarioLimite || !linkTopico) {
              alert('Preencha todos os campos!');
              return;
          }
          
          var mensagemRegresso = '';
          if (tipoAnalise === 'regresso') {
              mensagemRegresso = 'Ressalta-se que, por se tratar de um regresso, é indispensável a manutenção do decoro, sendo expressamente vedado comentar o caso com demais diretores. O descumprimento do prazo estabelecido para resposta poderá acarretar [b][color=#65b026]advertência interna[/color][/b], enquadrada como [b][color=#65b026]Abandono de Dever/Negligência[/color][/b].';
          }
          
          var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE ABERTURA DE ANÁLISE[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
      [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

      Por meio desta mensagem privada, informo que foi aberta uma análise na [b][color=#65b026][DIR] Central de Especializações.[/color][/b] As informações correspondentes seguem anexas abaixo para conhecimento e no aguardo de sua resposta quanto à análise, caso esteja ativo no momento. Desconsidere esta mensagem caso se encontre de licença no órgão no momento do recebimento.[/justify][/font][/color]

      [table  style="z-index: 99; margin-top: -55px; top: 30px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 40%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]ANÁLISE DE ${tipoAnalise.toUpperCase()}[/b][/color][/font][/td][/tr][/table]
      [table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]A análise de [b][color=#65b026]${tipoAnalise}[/color][/b] refere-se ao [b][color=#65b026]${cargoNickname}[/color][/b] e permanecerá aberta até [b][color=#65b026]${dataLimite}[/color][/b], às [b][color=#65b026]${horarioLimite}[/color][/b], aguardando sua manifestação no respectivo tópico, por meio do botão de acesso abaixo.

      ${mensagemRegresso}[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
      [url=${linkTopico}][table  style="z-index: 99;margin-top: -53px;top: 10px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url]
      [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
      [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
          
          showLoading("Enviando");
          var username = cargoNickname.split(' ').pop();
          send_MP("[DIR] Carta de Abertura de Análise", username, mp);
      }

      function enviarCartaPunicao(e) {
            e.preventDefault();
            var username = document.getElementById("username_punicao").value;
            var tipoPunicao = document.querySelector('input[name="tipo_punicao"]:checked');
            var dataInicial = document.getElementById("data_inicial_punicao").value;
            var dataFinal = document.getElementById("data_final_punicao").value;
            var motivo = document.getElementById("motivo_punicao").value;
            var link = document.getElementById("link_punicao").value;
            var fundamentacao = document.getElementById("fundamentacao_punicao").value;
            
            if (!username || !tipoPunicao || !dataInicial || !dataFinal || !motivo || !link || !fundamentacao) {
                alert('Preencha todos os campos!');
                return;
            }

            var tipoTexto = '';
            var condicional = '';
            var mostraPrazo = '';
            
            switch(tipoPunicao.value) {
                case 'advertencia_interna':
                    tipoTexto = 'uma advertência interna';
                    condicional = '[DIR] Quadro de Advertências';
                    mostraPrazo = `A sua advertência interna possui o prazo de 30 (trinta) dias, contando de [b][color=#65b026]${dataInicial}[/b][/color] a [b][color=#65b026]${dataFinal}[/b][/color]. `;
                    break;
                case 'advertencia_verbal':
                    tipoTexto = 'uma advertência verbal';
                    condicional = '[CE] Quadro de Advertências';
                    mostraPrazo = `A sua advertência verbal possui o prazo de 30 (trinta) dias, contando de [b][color=#65b026]${dataInicial}[/b][/color] a [b][color=#65b026]${dataFinal}[/b][/color]. `;
                    break;
                case 'advertencia_escrita':
                    tipoTexto = 'uma advertência escrita';
                    condicional = 'RCCSystem';
                    mostraPrazo = `A sua advertência escrita possui o prazo de 30 (trinta) dias, contando de [b][color=#65b026]${dataInicial}[/b][/color] a [b][color=#65b026]${dataFinal}[/b][/color]. `;
                    break;
                case '50_medalhas':
                    tipoTexto = '50 medalhas efetivas negativas';
                    condicional = 'RCCSystem';
                    mostraPrazo = '';
                    break;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]CARTA DE PUNIÇÃO[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe que recebeu [b][color=#65b026]${tipoTexto}[/b][/color] no [b][color=#65b026]${condicional}[/b][/color] devido ao crime de [b][color=#65b026]${motivo}[/b][/color]. Quaisquer dúvidas ou vindicações, procure a Presidência da Diretoria do Corpo Executivo. 

        ${mostraPrazo}Apresenta-se, a seguir, a fundamentação que ensejou a aplicação da penalidade junto com os anexos de comprovação.


        [table  style="z-index: 99; margin-top: -55px; top: 40px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 40%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]FUNDAMENTAÇÃO DA PUNIÇÃO[/b][/color][/font][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#1a560c"][table  style="padding-top: 10px; font-weight: 500; border-radius: 10px 10px 10px 10px; width: 100%; overflow: hidden;" bgcolor="#162612"][tr][td style="overflow: hidden; padding-top: 35px;"][color=white][justify][font=Poppins]${fundamentacao}[/font][/justify][/color][/td][/tr][/table][/td][/tr][/table]
        [url=${link}][table  style="z-index: 99;margin-top: -53px;top: 10px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]ANEXOS[/b][/color][/font][/td][/tr][/table][/url][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MP("[DIR] Carta de Punição", username, mp);
        }

      function send_MP(title, user, message) {
          showLoading("Enviando");
          
          fetch('/privmsg', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams({
                  folder: 'inbox',
                  mode: 'post',
                  post: '1',
                  username: user,
                  subject: title,
                  message: message
              })
          })
          .then(response => {
              if (response.ok) {
                  showLoading("Enviado! Redirecionando", true);
                  setTimeout(() => {
                      hideLoading();
                      location.reload();
                  }, 1500);
              } else {
                  hideLoading();
                  alert("Erro ao enviar mensagem!");
              }
          })
          .catch(error => {
              hideLoading();
              alert("Erro: " + error);
          });
      }

      function enviarMelhoresQuinzena(event) {
            event.preventDefault();
            
            var dataLimite = document.getElementById("data_limite_quinzena").value;
            var linkFormulario = document.getElementById("link_formulario_quinzena").value;
            
            if (!dataLimite || !linkFormulario) {
                alert('Preencha todos os campos!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]MELHORES DA QUINZENA[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que a [b][color=#65b026]Diretoria do Corpo Executivo[/color][/b], anuncia mais uma vez a abertura das votações para os [b][color=#65b026]Melhores da Quinzena![/color][/b]. O prazo da votação vai até [b][color=#65b026]${dataLimite}[/color][/b] às 23h59 no horário de Brasília.

        É importante que você vote com consciência e imparcialidade naquele que lhe apresenta ter um excelente trabalho. Uma gratificação importante está em suas mãos! Em caso de dúvidas, procure a Diretoria do Corpo Executivo.


        [table  style="margin-top: -35px; border: none !important;" ][tr  style="border: none !important;"][td  style="width: 40%; border: none !important;"][table  style="z-index: 99; margin-top: -45px; top: 30px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 40%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]FORMULÁRIO DE VOTAÇÃO[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; width: 40%; border: none !important; height: 63px;" bgcolor="#162612"][color=white][font=Poppins] Para votar nos Melhores Executivos da Quinzena, acesse o formulário abaixo.[/font][/color]
        [url=${linkFormulario}][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td][/tr][/table][/td]

        [td  style="border: none !important; width: 40%;"]
        [table  style="z-index: 99; margin-top: -45px; top: 30px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 40%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]NORMATIVAS E PRAZOS[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; width: 40%; height: 63px; border: none !important;" bgcolor="#162612"]  [color=white][font=Poppins]Para saber mais como funciona a votação, acesse o tópico abaixo.[/font][/color]
        [url=https://www.policiarcc.com/t32828-rcc-votacao-dos-melhores-executivos-da-quinzena][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td]
        [/tr][/table]
        [/td]
        [/tr][/table]
        [/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MPGroupMulti("[DIR] Melhores da Quinzena - VOTAÇÃO ABERTA!", mp, [31, 3, 10, 13, 5]);
        }

        function enviarPromocoesDesbloqueadas(event) {
            event.preventDefault();
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]PROMOÇÕES DESBLOQUEADAS[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que as promoções dos portadores da especialização intermediária [b][color=#65b026]agora podem ser realizadas após o fim do período avaliativo[/color][/b]. Caso algum executivo avaliado se sinta lesionado com a nota, o veredito ou os comentários recebidos em suas avaliações, deverá interpor recurso. Para isso, acesse a [url=https://www.policiarcc.com/t38726-ce-central-de-sindicancias][b][color=#65b026][CE] Central de Sindicâncias[/color][/b][/url].

        A leitura das avaliações realizadas pela Diretoria do Corpo Executivo é essencial quando se tratar de subalternos com especialização intermediária, especialmente para embasar decisões sobre promoções ou outras ações relevantes. Além disso, caso você seja um dos avaliados, é importante analisar atentamente os comentários recebidos, a fim de identificar eventuais deficiências e corrigi-las. Resultados das avaliações se encontram no [Diário Oficial] - Diretoria: Avaliações, tendo o seu acesso rápido abaixo:

        [center][table  style="width: 70%;margin-top: -15px; border: none !important;" ][tr  style="border: none !important;"][td  style="width: 60%; border: none !important;"][table  style="z-index: 99; margin-top: -45px; top: 45px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 60%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]RESULTADO DA AVALIAÇÃO MENSAL[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; border: none !important; height: 63px;" bgcolor="#162612"][color=white][font=Poppins]Para ver os resultados, acesse o tópico abaixo.[/font][/color]
        [url=https://www.policiarcc.com/t38299-diario-oficial-diretoria-resultado-da-avaliacao-quinzenal-de-especializacao-intermediaria][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td][/tr][/table][/td]
        [/tr][/table][/center][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MPGroupMulti("[DIR] Promoções desbloqueadas!", mp, [272, 268]);
        }

        function enviarAtividadeQuinzenal(event) {
            event.preventDefault();
            
            var dataAtividade = document.getElementById("data_atividade_quinzenal").value;
            var horarioAtividade = document.getElementById("horario_atividade_quinzenal").value;
            
            if (!dataAtividade || !horarioAtividade) {
                alert('Preencha todos os campos!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]ATIVIDADE QUINZENAL[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo que a [b][color=#65b026]Diretoria do Corpo Executivo[/color][/b], informa que no dia [b][color=#65b026]${dataAtividade}, às ${horarioAtividade} BR / ${horarioAtividade} PT[/color][/b], será realizada a atividade quinzenal obrigatória destinada a todos os [b][color=#65b026]portadores da Especialização Intermediária[/color][/b].

        Os executivos que não puderem comparecer deverão  [b][color=#65b026]justificar obrigatoriamente[/color][/b] sua ausência em até [b][color=#65b026]24 horas após a data e o horário de início da atividade[/color][/b]. Caso contrário, estarão sujeitos a receber uma  [b][color=#65b026]advertência escrita[/color][/b] pelo crime de [b][color=#65b026]Abandono de Dever/Negligência[/color][/b].

        [center][table  style="width: 70%;margin-top: -15px; border: none !important;" ][tr  style="border: none !important;"][td  style="width: 60%; border: none !important;"][table  style="z-index: 99; margin-top: -45px; top: 45px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 60%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]CENTRAL DE JUSTIFICATIVAS[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; border: none !important; height: 63px;" bgcolor="#162612"][color=white][font=Poppins]Para justificar a sua falta, acesse o tópico  abaixo.[/font][/color]
        [url=https://www.policiarcc.com/t38734-ce-justificativas][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td][/tr][/table][/td]
        [/tr][/table][/center][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MPGroupMulti("[DIR] Atividade Quinzenal - LEITURA OBRIGATÓRIA!", mp, [268]);
        }

        function enviarAtualizacaoEscala(event) {
            event.preventDefault();
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]ATUALIZAÇÃO DA ESCALA DE FUNÇÕES[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que a escala de funções foi [b][color=#65b026]atualizada[/color][/b]. Verifique sua função para a realização das atividades programadas e consulte sempre os manuais referentes às suas atribuições. Em caso de dúvidas, procure os Secretários ou a Presidência do órgão.

        [center][table  style="width: 70%;margin-top: -15px; border: none !important;" ][tr  style="border: none !important;"][td  style="width: 60%; border: none !important;"][table  style="z-index: 99; margin-top: -45px; top: 45px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 60%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]ESCALA DE FUNÇÕES[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; border: none !important; height: 63px;" bgcolor="#162612"][color=white][font=Poppins]Para visualizar a escala de funções, acesse a planilha abaixo.[/font][/color]
        [url=https://docs.google.com/spreadsheets/d/1GYUxpAR2QHpKfR5fVocE9he2c-Pm3INuU-vlMVAjS5U/edit?gid=1028543101#gid=1028543101][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td][/tr][/table][/td]
        [/tr][/table][/center][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            send_MPGroupMulti("[DIR] Atualização da Escala de Funções", mp, [146]);
        }

        function enviarAvaliacaoProjetos(event) {
            event.preventDefault();
            
            var dataLimite = document.getElementById("data_limite_projetos").value;
            var horarioLimite = document.getElementById("horario_limite_projetos").value;
            var linkPlanilha = document.getElementById("link_planilha_projetos").value;
            
            if (!dataLimite || !horarioLimite || !linkPlanilha) {
                alert('Preencha todos os campos!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]AVALIAÇÃO DE PROJETOS[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que os projetos enviados na Ouvidoria do Corpo Executivo devem ser avaliados em até 48 horas ([b][color=#65b026]${dataLimite} às ${horarioLimite} BR[/color][/b]) do recebimento desta Mensagem Privada na planilha anexada abaixo.

        Preencha corretamente a sua página no tempo hábil. A não avaliação de quaisquer projetos resultará no recebimento de uma [b][color=#65b026]advertência interna[/color][/b] por Abandono de Dever/Negligência. Quaisquer dúvidas ou reivindicações, procure a Presidência.

        [center][table  style="width: 70%;margin-top: -15px; border: none !important;" ][tr  style="border: none !important;"][td  style="width: 60%; border: none !important;"][table  style="z-index: 99; margin-top: -45px; top: 45px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 60%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]AVALIAÇÃO DE PROJETOS[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; border: none !important; height: 63px;" bgcolor="#162612"][color=white][font=Poppins]Para avaliar os projetos, acesse a planilha abaixo.[/font][/color]
        [url=${linkPlanilha}][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td][/tr][/table][/td]
        [/tr][/table][/center][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            send_MPGroupMulti("[DIR] Avaliação de Projetos", mp, [146]);
        }

        function enviarAvaliacaoMensalIntermediaria(event) {
            event.preventDefault();

            var dataLimite = document.getElementById("data_limite_avaliacao_mensal").value;
            var linkFormulario = document.getElementById("link_formulario_avaliacao_mensal").value;
            var executivosSemQuorum = document.getElementById("executivos_sem_quorum").value.trim();

            if (!dataLimite || !linkFormulario) {
                alert('Preencha todos os campos obrigatórios!');
                return;
            }

            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]AVALIAÇÃO MENSAL DA ESPECIALIZAÇÃO INTERMEDIÁRIA[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que está aberto o [b][color=#65b026]formulário de avaliação mensal[/color][/b] dos [b][color=#65b026]oficiais do Corpo Executivo[/color][/b] que possuem[b][color=#65b026]Especialização Intermediária[/color][/b], os quais estão divididos entre turnos. É [b][color=#65b026]dever[/color][/b] de todos os oficiais executivos aptos a avaliar e estão ativos, com exceção daqueles que estão isentos [b][color=#65b026]de acordo[/color][/b] com as normativas presentes no tópico [url=https://www.policiarcc.com/t38732-ce-regulamento-de-avaliacoes][b][color=#65b026][CE] Regulamento de Avaliações[/color][/b][/url], responder à avaliação[/color][/b]. 

        Além disso, é importante ler o tópico a seguir, o [url=https://www.policiarcc.com/t39107-ce-guia-de-criterios-e-avaliacoes][b][color=#65b026][CE] Guia de Critérios e Avaliações[/color][/b][/url], que servirá como base inicial para definir o que cobrar de cada executivo, bem como orientar sobre como avaliar, atribuir notas e emitir vereditos coerentes. Está passível de punição, [b]conforme a gravidade[/b], o oficial executivo que:

        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]01[/b][/color][/td][/tr][/table] Não responder à avaliação até o dia [b]${dataLimite} às 23h59 (horário de Brasília)[/b], sujeito à advertência escrita;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]02[/b][/color][/td][/tr][/table] [b]Falsificar informações[/b] no formulário, seja tal realizado de [b]forma intencional[/b] ou com base numa avaliação realizada de [b]forma rasa[/b], sujeito às sanções penais;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]03[/b][/color][/td][/tr][/table] Sair em licença [b]após o recebimento[/b] desta Mensagem Privada, sem ter a [b]dispensa da Presidência da Diretoria[/b] para responder à avaliação, sujeito a advertência escrita;
        [table style="width: 20px; display: math; position: relative; border-radius: 5px; border: none!Important; padding-top: 12px; top: 8px;" bgcolor="#65b026"][tr style="border: none!Important; overflow: hidden;"][td style="border:  none!Important; overflow: hidden;"][color=white][b]04[/b][/color][/td][/tr][/table] [b]Deixar de avaliar[/b] algum executivo que esteja nos [b]parâmetros expostos no formulário da avaliação[/b], sujeito ao recebimento de 50 medalhas negativas efetivas por executivo não avaliado.

        [center][table  style="width: 70%;margin-top: -15px; border: none !important;" ][tr  style="border: none !important;"][td  style="width: 60%; border: none !important;"][table  style="z-index: 99; margin-top: -45px; top: 45px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 60%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]FORMULÁRIO DE AVALIAÇÃO MENSAL[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; border: none !important; height: 63px;" bgcolor="#162612"][color=white][font=Poppins]Para acessar as informações sobre e o formulário de avaliação, acesse o tópico abaixo.[/font][/color]
        [url=${linkFormulario}][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td][/tr][/table][/td]
        [/tr][/table][/center]`;

            if (executivosSemQuorum) {
                mp += `
        Só deve enviar seguinte texto para diretores -> Segue a relação dos executivos que se encontram sem o quórum mínimo de dois executivos por turno para avaliação.

        [center][table style='margin-bottom: 9px;width: max-content;max-width: 100%;padding: 0;line-height: 0;border: none!important;box-shadow: 0 0 0 1px #65b026;border-radius: 150px!important;position: relative;z-index: 0;top: -5px;'][tr style='border: none!important;'][td style=' border: none!important;'][left]
        ${executivosSemQuorum}.[/left][/td][/tr][/table][/center]`;
            }

            mp += `[/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;

            showLoading("Enviando");

            if (executivosSemQuorum) {
                send_MPGroupMulti("[DIR] Avaliação Mensal da Especialização Intermediária", mp, [146]);
            } else {
                send_MPGroupMulti("[DIR] Avaliação Mensal da Especialização Intermediária", mp, [268]);
            }
        }

        function enviarPromocoesBloqueadas(event) {
            event.preventDefault();
            
            var listaExecutivos = document.getElementById("lista_executivos_bloqueados").value;
            
            if (!listaExecutivos) {
                alert('Preencha a lista de executivos com promoção bloqueada!');
                return;
            }
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]PROMOÇÕES BLOQUEADAS[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que os seguintes portadores da especialização intermediária [b][color=#65b026]não poderão ser promovidos até segunda ordem[/color][/b]. Essa medida visa preservar a integridade das avaliações realizadas pelo órgão, que estão prestes a ocorrer, e evitar qualquer interferência externa. Segue a lista de policiais que a promoção está bloqueada durante a avaliação:

        [center][table style='margin-bottom: 9px;width: max-content;max-width: 100%;padding: 0;line-height: 0;border: none!important;box-shadow: 0 0 0 1px #65b026;border-radius: 150px!important;position: relative;z-index: 0;top: -5px;'][tr style='border: none!important;'][td style=' border: none!important;'][left]
        ${listaExecutivos}.[/left][/td][/tr][/table][/center]

        Promoções que envolvam policiais mencionados acima com a especialização intermediária serão canceladas caso sejam realizadas após o envio desta mensagem privada, e o responsável pelo requerimento poderá ser [b][color=#65b026]punido[/color][/b] pelo crime de [b][color=#65b026]Abandono de Dever/Negligência[/color][/b]. Em caso de dúvidas, entre em contato com a Diretoria do Corpo Executivo.[/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MPGroupMulti("[DIR] Promoções Bloqueadas!", mp, [272, 268]);
        }

        function enviarReuniaoGeral(event) {
            event.preventDefault();
            
            var dataReuniao = document.getElementById("data_reuniao_geral").value;
            var horarioReuniao = document.getElementById("horario_reuniao_geral").value;
            var convocador = document.getElementById("convocador_reuniao").value;
            var destinatarios = document.getElementById("destinatarios_reuniao").value;
            
            if (!dataReuniao || !horarioReuniao || !convocador || !destinatarios) {
                alert('Preencha todos os campos!');
                return;
            }
            
            var grupos = [];
            var fraseObrigatoriedade = "";
            
            if (destinatarios === "membros do Corpo Executivo") {
                grupos = [31, 3, 10, 5, 13];
                fraseObrigatoriedade = "Vale ressaltar que a presença por parte dos portadores da Especialização Intermediária e Avançada é obrigatória nesta reunião geral.";
            } else if (destinatarios === "portadores da Especialização Intermediária") {
                grupos = [268];
                fraseObrigatoriedade = "Vale ressaltar que a presença por parte dos portadores da Especialização Intermediária é obrigatória nesta reunião geral.";
            } else if (destinatarios === "membros da Diretoria do Corpo Executivo") {
                grupos = [146];
                fraseObrigatoriedade = "Vale ressaltar que a presença por parte dos diretores é obrigatória nesta reunião geral.";
            }

            var tipoAdvertencia = destinatarios === "membros da Diretoria do Corpo Executivo" 
                ? "advertência escrita ou interna se for a reunião para os diretores" 
                : "advertência escrita";
            
            var mp = `[table  style="overflow: hidden; border-radius: 10px; width: 100%; margin: 0px auto; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 1px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%; font-family Poppins; font-size: 14px;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#4C8613"][img]https://i.imgur.com/Ewasqzu.png[/img][/td][/tr][tr style="border: none !important;"][td style="border: none !important; padding: 5px; width: 100%;" bgcolor="#165519"][table  style="overflow: hidden; border-radius: 150px; width: 60%; margin: 0 auto; margin-top: -40px; z-index: 2; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px"][tr style="border: none !important;"][td style="border: none !important; padding: 3px; width: 100%;" bgcolor="#247411"][size=20][b][font=Poppins][color=#F0F0F0]REUNIÃO GERAL[/color][/font][/b][/size][/td][/tr][/table][/td][/tr][/table][table  style="overflow: hidden; border-radius: 10px;  width: 100%; margin: 0 auto; margin-top: -20px; z-index: 1; position: relative;"][tr style="border: none !important;"][td style="border: none !important; padding: 0px; width: 100%;" bgcolor="#080D01"][table  style="overflow: hidden; border-radius: 10px; width: 100%;"][tr style="border: none !important;"][td style="border: none !important; padding-top: 30px!important; padding-bottom: 0px; width: 100%;" bgcolor="#041600"][color=white][font=Poppins][justify][center]Saudações, [color=#65b026][b]{USERNAME}[/b][/color]
        [table style="width: 20%; border-radius: 10px;border: none!important; overflow: hidden; line-height: 1em; margin-top:0.6em" bgcolor="#65b026"][tr style="overflow: hidden; border: none !important;"][td style="border: none!important; overflow: hidden;  padding: 1px"][/td][/tr][/table][/center]

        Por meio desta Mensagem Privada, informo-lhe, que a [b][color=#65b026]${convocador}[/color][/b], informa que no dia [b][color=#65b026]${dataReuniao}, às ${horarioReuniao} BR / ${horarioReuniao} PT[/color][/b], será realizada a reunião geral destinada a todos os [b][color=#65b026]${destinatarios}[/color][/b].

        ${fraseObrigatoriedade}

        Os executivos que não puderem comparecer deverão [b][color=#65b026]justificar obrigatoriamente[/color][/b] sua ausência em até [b][color=#65b026]24 horas após a data e o horário de início da reunião[/color][/b]. Caso contrário, estarão sujeitos a receber uma  [b][color=#65b026]${tipoAdvertencia}[/color][/b] pelo crime de [b][color=#65b026]Abandono de Dever/Negligência[/color][/b].

        [center][table  style="width: 70%;margin-top: -15px; border: none !important;" ][tr  style="border: none !important;"][td  style="width: 60%; border: none !important;"][table  style="z-index: 99; margin-top: -45px; top: 45px; right: -20px;  position: relative; font-weight: 500; border-radius: 150px; width: 60%; float: left; overflow: hidden;" bgcolor="#1a560c"][tr][td style="overflow: hidden; padding: 2%"][font=Poppins][color=#FFFFFF][b]CENTRAL DE JUSTIFICATIVAS[/b][/color][/font][/td][/tr][/table]
        [table style=" border-radius: 10px; border: none !important;"][tr style="border: none !important;"][td style="border-radius: 10px; border: none !important; height: 63px;" bgcolor="#162612"][color=white][font=Poppins]Para justificar a sua falta, acesse o tópico  abaixo.[/font][/color]
        [url=https://www.policiarcc.com/t38734-ce-justificativas][table  style="z-index: 99;margin-top: -53px;top: 60px;right: 30px;position: relative;font-weight: 500;border-radius: 150px;width: 40%;float: right;overflow: hidden;" bgcolor="#247411"][tr][td style="overflow: hidden;padding: 4%;"][font=Poppins][color=white][b]CLIQUE AQUI[/b][/color][/font][/td][/tr][/table][/url][/td][/tr][/table][/td]
        [/tr][/table][/center][/justify][/font][/color]
        [color=white][font=Poppins][color=#4b8410]<i class="fas fa-code"></i>[/color] por [b]Aloscon[/b] | Todos os direitos reservados à [b]Diretoria do Corpo Executivo[/b].[/font][/color]
        [/font][/justify][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table][/td][/tr][/table]`;
            
            showLoading("Enviando");
            send_MPGroupMulti("[DIR] Reunião Geral - LEITURA OBRIGATÓRIA!", mp, grupos);
        }
            
      function send_MPGroupMulti(title, message, groups) {
            if (!groups || groups.length === 0) {
                alert('Nenhum grupo especificado para envio!');
                return;
            }
            
            showLoading("Enviando");

            let promises = groups.map(groupId => {
                return fetch('/privmsg', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        folder: 'inbox',
                        mode: 'post',
                        post: '1',
                        usergroup: groupId,
                        subject: title,
                        message: message
                    })
                });
            });

            Promise.all(promises)
                .then(responses => {
                    const allSuccessful = responses.every(response => response.ok);
                    
                    if (allSuccessful) {
                        showLoading(`Enviado para ${groups.length} grupos! Redirecionando`, true);
                        setTimeout(() => {
                            hideLoading();
                            location.reload();
                        }, 1500);
                    } else {
                        hideLoading();
                        alert(`Erro ao enviar para alguns grupos! Verifique os grupos: ${groups.join(', ')}`);
                    }
                })
                .catch(error => {
                    hideLoading();
                    alert("Erro: " + error);
                });
        }

      function showLoading(message, isSuccess = false) {
            let loadingOverlay = document.getElementById('loading-overlay');
            if (!loadingOverlay) {
                loadingOverlay = document.createElement('div');
                loadingOverlay.id = 'loading-overlay';
                document.body.appendChild(loadingOverlay);
            }
            
            if (isSuccess) {
                loadingOverlay.innerHTML = `
                    <div class="loading-container">
                        <div class="spinner" style="border-top-color: #4CAF50;"></div>
                        <p class="redirecionando">${message}</p>
                    </div>
                `;
            } else {
                loadingOverlay.innerHTML = `
                    <div class="loading-container">
                        <div class="spinner"></div>
                        <p>${message}</p>
                    </div>
                `;
            }
            
            loadingOverlay.style.display = 'flex';
        }
      function hideLoading() {
            const loadingOverlay = document.getElementById('loading-overlay');
            if (loadingOverlay) {
                loadingOverlay.style.display = 'none';
            }
        }

      function formatarData(data) {
            const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
            const dia = data.getDate().toString().padStart(2, '0');
            const mes = meses[data.getMonth()];
            const ano = data.getFullYear();
            return `${dia} ${mes} ${ano}`;
        }

        function calcularDataFinal(dataInicial) {
            const data = new Date(dataInicial);
            data.setDate(data.getDate() + 30);
            return formatarData(data);
        }

        function atualizarVisibilidadeDataFinal() {
            const tipoPunicao = document.querySelector('input[name="tipo_punicao"]:checked');
            const dataFinalContainer = document.getElementById("data_final_container");
            
            if (tipoPunicao && dataFinalContainer) {
                const mostrarDataFinal = tipoPunicao.value === 'advertencia_interna' || 
                                    tipoPunicao.value === 'advertencia_escrita' ||
                                    tipoPunicao.value === 'advertencia_verbal';
                
                if (mostrarDataFinal) {
                    dataFinalContainer.style.display = 'block';
                } else {
                    dataFinalContainer.style.display = 'none';
                }
            }
        }

        function atualizarVisibilidadeComprovacaoRegresso() {
            const checkboxes = document.querySelectorAll('#regresso_especializacao input[type="checkbox"]:checked');
            const linkContainer = document.getElementById('link_comprovacao_container');
            const linkInput = document.getElementById('link_comprovacao');
            
            let precisaComprovacao = false;
            
            checkboxes.forEach(checkbox => {
                const precisaAnexo = checkbox.getAttribute('data-anexo') === 'true';
                if (precisaAnexo) {
                    precisaComprovacao = true;
                }
            });
            
            if (linkContainer && linkInput) {
                if (precisaComprovacao) {
                    linkContainer.style.display = 'flex';
                    linkInput.required = true;
                } else {
                    linkContainer.style.display = 'none';
                    linkInput.required = false;
                    linkInput.value = '';
                }
            }
        }

        document.addEventListener('DOMContentLoaded', function() {
            const dataInicialInput = document.getElementById('data_inicial_punicao');
            const dataFinalInput = document.getElementById('data_final_punicao');

            const checkboxesRegresso = document.querySelectorAll('#regresso_especializacao input[type="checkbox"]');
            checkboxesRegresso.forEach(checkbox => {
                checkbox.addEventListener('change', atualizarVisibilidadeComprovacaoRegresso);
            });
            
            if (dataInicialInput && dataFinalInput) {
                const hoje = new Date();
                dataInicialInput.value = formatarData(hoje);
                dataFinalInput.value = calcularDataFinal(hoje);
            }
            document.querySelectorAll('input[name="tipo_punicao"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    const dataInicial = document.getElementById('data_inicial_punicao').value;
                    if (dataInicial) {
                        const dataObj = new Date(dataInicial.split(' ').reverse().join('-'));
                        document.getElementById('data_final_punicao').value = calcularDataFinal(dataObj);
                    }
                    atualizarVisibilidadeDataFinal();
                });
            });
            atualizarVisibilidadeDataFinal();
            atualizarVisibilidadeComprovacaoRegresso();
        });
