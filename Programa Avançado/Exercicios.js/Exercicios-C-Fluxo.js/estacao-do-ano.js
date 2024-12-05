function calculaEstacaoDoAno(dia, mes) {
    if (dia < 1 || dia > 31) {
        return "Por favor introduza um dia entre 1 e 31.";
    }
    if (mes < 1 || mes > 12) {
        return "Por favor introduza um mês entre 1 e 12.";
    }
    if ((mes === 4 || mes === 6 || mes === 9 || mes === 11) && dia > 30) {
        return "Por favor introduza um dia entre 1 e 30.";
    }
    if (mes === 2 && dia > 28) {
        return "Por favor introduza um dia entre 1 e 28.";
    }

    if ((mes === 3 && dia >= 20) || (mes > 3 && mes < 6) || (mes === 6 && dia <= 20)) {
        return "Primavera";
    }
    else if ((mes === 6 && dia >= 21) || (mes > 6 && mes < 9) || (mes === 9 && dia <= 22)) {
        return "Verão";
    }
    else if ((mes === 9 && dia >= 23) || (mes > 9 && mes < 12)|| (mes === 12 && dia <= 20)) {
        return "Outono";
    }
    else {
        return "Inverno";
    }

}