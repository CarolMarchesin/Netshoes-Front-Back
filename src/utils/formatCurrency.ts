/**
 * Formatar valores em real.
 * @param value Valor em centavos (number ou string)
 * @returns Valor formatado em moeda BRL
 */
const formatCurrency = (value: number | string): string => {
  const numericValue = typeof value === 'string' ? parseFloat(value) : value;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(numericValue / 100);
};

export default formatCurrency;