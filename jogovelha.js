const dt = new Date().toLocaleString();
let jogadas = 0;

document.getElementById("data").innerHTML = dt;

function FuncaoAviso() {
    alert('Este é apenas um painel de avisos!');
}

let tabuleiro = Array(10).fill("0");

function jogar(bot) {
    if (tabuleiro[0] != "1") {
        if (tabuleiro[bot] == "0") {
            document.getElementById(bot).innerHTML = "X";
            tabuleiro[bot] = "X";
            jogadas++;

            if (VerificaVitoria("X")) {
                document.getElementById("data").innerHTML = "Você Ganhou!!";
                tabuleiro[0] = "1";
                return;
            }

            if (!temEspacosLivres()) {
                document.getElementById("data").innerHTML = "O jogo Empatou!";
                alert("O jogo empatou!");
                tabuleiro[0] = "1";
                return;
            }

            RoboJoga();

            if (VerificaVitoria("O")) {
                document.getElementById("data").innerHTML = "Você Perdeu!!";
                tabuleiro[0] = "1";
                return;
            }

            if (!temEspacosLivres()) {
                document.getElementById("data").innerHTML = "O jogo Empatou!";
                alert("O jogo empatou!");
                tabuleiro[0] = "1";
            }
        } else {
            alert("Escolha outra posição!");
        }
    } else {
        alert("O jogo já acabou!");
    }
}

function VerificaVitoria(jogador) {
    return (
        (tabuleiro[1] == jogador && tabuleiro[2] == jogador && tabuleiro[3] == jogador) ||
        (tabuleiro[4] == jogador && tabuleiro[5] == jogador && tabuleiro[6] == jogador) ||
        (tabuleiro[7] == jogador && tabuleiro[8] == jogador && tabuleiro[9] == jogador) ||
        (tabuleiro[1] == jogador && tabuleiro[4] == jogador && tabuleiro[7] == jogador) ||
        (tabuleiro[2] == jogador && tabuleiro[5] == jogador && tabuleiro[8] == jogador) ||
        (tabuleiro[3] == jogador && tabuleiro[6] == jogador && tabuleiro[9] == jogador) ||
        (tabuleiro[1] == jogador && tabuleiro[5] == jogador && tabuleiro[9] == jogador) ||
        (tabuleiro[3] == jogador && tabuleiro[5] == jogador && tabuleiro[7] == jogador)
    );
}

function temEspacosLivres() {
    return tabuleiro.includes("0");
}

function RoboJoga() {
    let jogadaValida = false;
    while (!jogadaValida) {
        let val = Math.floor(Math.random() * 9) + 1; // Gera número entre 1 e 9
        if (tabuleiro[val] == "0") {
            document.getElementById(val).innerHTML = "O";
            tabuleiro[val] = "O";
            jogadas++;
            jogadaValida = true;
        }
    }
}
