// Make candles clickable to blow them out
document.querySelectorAll('.candle').forEach(candle => {
    candle.addEventListener('click', () => {
        candle.classList.add('out');
    });
});
