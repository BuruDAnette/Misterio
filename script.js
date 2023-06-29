document.addEventListener('DOMContentLoaded', () => {
  const introPanel = document.getElementById('intro-panel');
  const gamePanel = document.getElementById('game-panel');
  const gamePanel2 = document.getElementById('game-panel2');
  const gamePanel3 = document.getElementById('game-panel3');
  const gamePanel4 = document.getElementById('game-panel4');
  const gamePanel5 = document.getElementById('game-panel5');
  const gamePanel6 = document.getElementById('game-panel6');
  const gamePanel7_1 = document.getElementById('game-panel7_1');
  const gamePanel7_2 = document.getElementById('game-panel7_2');
  const gamePanel8 = document.getElementById('game-panel8');
  const gamePanel9 = document.getElementById('game-panel9');
  const gamePanel10 = document.getElementById('game-panel10');
  const gamePanel11_1 = document.getElementById('game-panel11_1');
  const gamePanel11_2 = document.getElementById('game-panel11_2');
  const gamePanel12 = document.getElementById('game-panel12');
  const gamePanel13 = document.getElementById('game-panel13');
  const gamePanel14 = document.getElementById('game-panel14');
  const gamePanel15 = document.getElementById('game-panel15');
  const gamePanel16_1 = document.getElementById('game-panel16_1');
  const gamePanel16_2 = document.getElementById('game-panel16_2');
  const gamePanel17 = document.getElementById('game-panel17');
  const gamePanel18= document.getElementById('game-panel18');
  const message = document.getElementById('message'); // Elemento HTML para exibir a mensagem
  const message1 = document.getElementById('message'); // Elemento HTML para exibir a mensagem

  const startButton = document.getElementById('start-button');
  const nextButtons = document.querySelectorAll('.next-button');
  const nextButtons1 = document.querySelectorAll('.next-button-option1');
  const nextButtons2 = document.querySelectorAll('.next-button-option2');

  startButton.addEventListener('click', () => {
    introPanel.classList.add('hide');
    gamePanel.classList.add('show');
  });

  const affinityFill = document.querySelector('.affinity-fill');
let affinityLevel = 40; // Valor inicial de 100%

function increaseAffinity() {
  affinityLevel += 4;
  if (affinityLevel > 100) {
    affinityLevel = 100;
  }
  updateAffinityMeter();
}

function decreaseAffinity() {
  affinityLevel -= 6;
  if (affinityLevel < 0) {
    affinityLevel = 0;
  }
  updateAffinityMeter();
}

function updateAffinityMeter() {
  affinityFill.style.height = `${affinityLevel}%`;
}

// Exemplo de uso
increaseAffinity(); // Aumenta a afinidade
increaseAffinity();
decreaseAffinity(); // Diminui a afinidade






  // Função para exibir o painel game-panel7_1
  function showGamePanel7_1() {
    gamePanel6.classList.remove('show');
    gamePanel7_1.classList.add('show');
    message.textContent = '+1 ABSTRAÇÃO'; // Defina aqui a mensagem desejada

  }

  // Função para exibir o painel game-panel7_2
  function showGamePanel7_2() {
    gamePanel6.classList.remove('show');
    gamePanel7_2.classList.add('show');
  }

  // Função para verificar qual botão foi clicado e chamar a função correspondente
  function handleButtonClick(button) {
    if (button.classList.contains('next-button-option1')) {
      showGamePanel7_1();
      increaseAffinity();

    } else if (button.classList.contains('next-button-option2')) {
      showGamePanel7_2();
      decreaseAffinity(); // Diminui a afinidade

    }
  }

  // Função para exibir o painel game-panel11_1
function showGamePanel11_1() {
  gamePanel10.classList.remove('show');
  gamePanel11_1.classList.add('show');
  message1.textContent = '+1 ABSTRAÇÃO'; // Adiciona a mensagem desejada
}

  function showGamePanel11_2() {
    gamePanel10.classList.remove('show');
    gamePanel11_2.classList.add('show');
  }
  function handleButtonClick2(button) {
    if (button.classList.contains('next-button-option1')) {
      showGamePanel11_1();
      increaseAffinity();

    } else if (button.classList.contains('next-button-option2')) {
      showGamePanel11_2();
      decreaseAffinity(); // Diminui a afinidade

    }
  }

  function showGamePanel16_1() {
    gamePanel15.classList.remove('show');
    gamePanel16_1.classList.add('show');
  }
  function showGamePanel16_2() {
    gamePanel15.classList.remove('show');
    gamePanel16_2.classList.add('show');
  }
  function handleButtonClick3(button) {
    if (button.classList.contains('next-button-option1')) {
      showGamePanel16_1();
      increaseAffinity();

    } else if (button.classList.contains('next-button-option2')) {
      showGamePanel16_2();
      decreaseAffinity(); // Diminui a afinidade

    }
  }

  function showGamePanel17() {
    gamePanel16_1.classList.remove('show');
    gamePanel17.classList.add('show');
  }
  function showGamePanel18() {
    gamePanel16_1.classList.remove('show');
    gamePanel18.classList.add('show');
  }
  function handleButtonClick4(button) {
    if (button.classList.contains('next-button-option1')) {
      showGamePanel17();
      increaseAffinity();

    } else if (button.classList.contains('next-button-option2')) {
      showGamePanel18();
      decreaseAffinity(); // Diminui a afinidade

    }
  }

  nextButtons.forEach((button) => {
    button.addEventListener('click', () => {
      if (gamePanel.classList.contains('show')) {
        gamePanel.classList.remove('show');
        gamePanel2.classList.add('show');
      } else if (gamePanel2.classList.contains('show')) {
        gamePanel2.classList.remove('show');
        gamePanel3.classList.add('show');
      } else if (gamePanel3.classList.contains('show')) {
        gamePanel3.classList.remove('show');
        gamePanel4.classList.add('show');
      } else if (gamePanel4.classList.contains('show')) {
        gamePanel4.classList.remove('show');
        gamePanel5.classList.add('show');
      } else if (gamePanel5.classList.contains('show')) {
        gamePanel5.classList.remove('show');
        gamePanel6.classList.add('show');
        nextButtons1.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick(button);
          });
        });
        nextButtons2.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick(button);
          });
        });
      } else if (gamePanel7_1.classList.contains('show')) {
        gamePanel7_1.classList.remove('show');
        gamePanel8.classList.add('show');
      } else if (gamePanel8.classList.contains('show')) {
        gamePanel8.classList.remove('show');
        gamePanel9.classList.add('show');
      } else if (gamePanel9.classList.contains('show')) {
        gamePanel9.classList.remove('show');
        gamePanel10.classList.add('show');
        nextButtons1.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick2(button);
          });
        });
        nextButtons2.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick2(button);
          });
        });
      } else if (gamePanel11_1.classList.contains('show')) {
        gamePanel11_1.classList.remove('show');
        gamePanel12.classList.add('show');
      }  else if (gamePanel12.classList.contains('show')) {
        gamePanel12.classList.remove('show');
        gamePanel13.classList.add('show');
      } else if (gamePanel13.classList.contains('show')) {
        gamePanel13.classList.remove('show');
        gamePanel14.classList.add('show');
      } else if (gamePanel14.classList.contains('show')) {
        gamePanel14.classList.remove('show');
        gamePanel15.classList.add('show');
        nextButtons1.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick3(button);
          });
        });
        nextButtons2.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick3(button);
          });
        });
      } else if (gamePanel16_1.classList.contains('show')) {
        gamePanel16_1.classList.remove('show');
        gamePanel17.classList.add('show');
        nextButtons1.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick4(button);
          });
        });
        nextButtons2.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick4(button);
          });
        });
      } else if (gamePanel17.classList.contains('show')) {
        gamePanel17.classList.remove('show');
        gamePanel18.classList.add('show');
        nextButtons1.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick5(button);
          });
        });
        nextButtons2.forEach((button) => {
          button.addEventListener('click', () => {
            handleButtonClick5(button);
          });
        });
      } 
    });
  });
});
