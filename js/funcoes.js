function validarCliente(idNome, idEndereco, idTelefone, idCidade, idEmail) {
    let nome = document.getElementById(idNome).value;
    let endereco = document.getElementById(idEndereco).value;
    let telefone = document.getElementById(idTelefone).value;
    let cidade = document.getElementById(idCidade).value;
    let email = document.getElementById(idEmail).value;

    if (nome == "")
        alert("Nome não pode estar em branco. Favor preenchê-lo!");
    else if (endereco == "")
        alert("Endereço não pode estar em branco. Favor preenchê-lo!");
    else if (telefone == "")
        alert("Telefone não pode estar em branco. Favor preenchê-lo!");
    else if (cidade == "")
        alert("Cidade não pode estar em branco. Favor preenchê-lo!");
    else if (email == "")
        alert("Email não pode estar em branco. Favor preenchê-lo!");
    else cadastrarCliente(nome, endereco, parseInt(telefone), cidade, email);
}

function cadastrarCliente(nome, endereco, telefone, cidade, email) {
    let novoCliente = {nome:nome, endereco:endereco, telefone:telefone, cidade:cidade, email:email};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; 
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); 
        localStorage.setItem("clientes",JSON.stringify(clientes))
        alert("Cliente cadastrado com sucesso "+ nome+"!");
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function validarProduto(idNomeProduto, idCodProduto, idQtidadeProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let codigo = document.getElementById(idCodProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else if (codigo == "")
        alert("Código do produto não pode estar em branco. Favor preenchê-lo!");
    else cadastrarProduto(nome, codigo, parseInt(qtidade));
}

function cadastrarProduto(produto, codig, qtidade) {
    let novoProduto = {nome:produto, codigo:codig, quantidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; 
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); 
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
        atualizarTotalEstoque("totalEstoque");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}

function atualizarTotalEstoque(idCampo) {
    localStorage.setItem("totalEstoque",++document.getElementById(idCampo).innerHTML)
}

function carregarTotalEstoque(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalEstoque = localStorage.getItem("totalEstoque");
        if (totalEstoque == null) totalEstoque = 0;
        document.getElementById(idCampo).innerHTML = totalEstoque;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function listarEstoque() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Estoque:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no estoque</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Código do produto: "+produto.codigo+"</li>");
                document.write("<li>Quantidade no estoque: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}
