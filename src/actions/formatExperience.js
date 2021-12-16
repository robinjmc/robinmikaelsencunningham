const formatExp = (exp) => {
    let formattedExp = [];
    for (let i = 0; i < exp.length; i++) {
        const { id, companyName, title, isCurrent, start, end, description } = exp[i];
        const sub = `${title}, ${start} - ${isCurrent ? 'present' : end}`;
        if (formattedExp.length > 0 && formattedExp.filter(exp => exp.companyName === companyName).length > 0) {
            for (let i = 0; i < formattedExp.length; i++) {
                if (formattedExp[i].companyName === companyName) {
                    const details = formattedExp[i].details;
                    formattedExp[i] = { ...formattedExp[i], details: [...details, { sub, description }] };
                }
            }
        } else {
            formattedExp.push({
                id,
                companyName,
                details: [
                    {
                        sub,
                        description
                    }
                ]
            });
        }
    }
    return formattedExp;
}

export default formatExp;