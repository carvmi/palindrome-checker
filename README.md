# Palindrome Checker 
![image](https://github.com/user-attachments/assets/b78efa30-6ad8-4225-b23a-9d797312de08)
## Função isPalindrome
- Parâmetro str: A função recebe uma string (str) que o usuário forneceu para ser verificada.
- O primeiro passo dentro da função é remover caracteres não alfanuméricos (ou seja, tudo que não seja letras e números) da string. Isso é feito com o método replace utilizando a expressão regular /[^a-zA-Z0-9]/g. A expressão regular significa:
    - ^: Negação.
    - [a-zA-Z0-9]: Todos os caracteres alfanuméricos (letras maiúsculas, minúsculas e números).
    - g: Modificador global, para garantir que todas as ocorrências de caracteres não alfanuméricos sejam removidas, não apenas a primeira.
- Após remover os caracteres não alfanuméricos, a string resultante é convertida para minúsculas com toLowerCase(), para garantir que a comparação não seja sensível a maiúsculas/minúsculas.
- A string limpa (cleanedStr) é comparada com a sua versão invertida. Para inverter a string, ela é convertida em um array de caracteres com split(''), invertida com reverse(), e então unida de volta em uma string com join('').
- Se a string limpa for igual à sua versão invertida, significa que é um palíndromo, então a função retorna true. Caso contrário, retorna false.
##  Event Listener para o botão "Check"
- Quando o usuário clica no botão de verificação (presumivelmente com o ID check-btn), o código executa a função anônima associada ao evento de clique.
- O valor do campo de entrada (presumivelmente um campo de texto com o ID text-input) é obtido usando document.getElementById('text-input').value.
- O método trim() é usado para remover espaços em branco antes e depois da entrada, garantindo que o texto não tenha espaços extras.
- Se o valor do campo de entrada estiver vazio (inputValue === ""), um alerta é exibido ao usuário pedindo para ele inserir um valor.
- Se o campo não estiver vazio, o código chama a função isPalindrome(inputValue) para verificar se o valor inserido é um palíndromo.
- O resultado da verificação (se é ou não um palíndromo) é então exibido em um elemento HTML com o ID result usando textContent. Dependendo do resultado da verificação, o texto do resultElement será ajustado para informar ao usuário se a string inserida é ou não um palíndromo.
