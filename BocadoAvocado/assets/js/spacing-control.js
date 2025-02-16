document.addEventListener('DOMContentLoaded', function() {
    // Elementos del control de espaciado
    const letterSpacingInput = document.getElementById('letterSpacing');
    const lineHeightInput = document.getElementById('lineHeight');
    const resetButton = document.getElementById('resetSpacing');
    const spacingControl = document.querySelector('.spacing-control');
    const toggleButton = document.querySelector('.spacing-toggle');
    
    // Toggle del panel
    toggleButton.addEventListener('click', function() {
        spacingControl.classList.toggle('active');
        
        // Actualizar el aria-label según el estado
        const isActive = spacingControl.classList.contains('active');
        toggleButton.setAttribute('aria-label', 
            isActive ? 'Ocultar controles de espaciado' : 'Mostrar controles de espaciado'
        );
    });
    
    // Cerrar el panel al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!spacingControl.contains(event.target) && 
            spacingControl.classList.contains('active')) {
            spacingControl.classList.remove('active');
            toggleButton.setAttribute('aria-label', 'Mostrar controles de espaciado');
        }
    });
    
    // Prevenir que los clics dentro del panel lo cierren
    spacingControl.addEventListener('click', function(event) {
        event.stopPropagation();
    });
    
    // Valores por defecto
    const defaultValues = {
        letterSpacing: 2,
        lineHeight: 1.8
    };
    
    // Función para actualizar el espaciado
    function updateSpacing() {
        const letterSpacing = letterSpacingInput.value / 16 + 'em';
        const lineHeight = lineHeightInput.value;
        
        // Actualizar variables CSS
        document.documentElement.style.setProperty('--letter-spacing', letterSpacing);
        document.documentElement.style.setProperty('--line-height', lineHeight);
    }
    
    // Función para resetear valores
    function resetSpacing() {
        letterSpacingInput.value = defaultValues.letterSpacing;
        lineHeightInput.value = defaultValues.lineHeight;
        updateSpacing();
    }
    
    // Event listeners
    letterSpacingInput.addEventListener('input', updateSpacing);
    lineHeightInput.addEventListener('input', updateSpacing);
    resetButton.addEventListener('click', resetSpacing);
    
    // Inicializar con valores por defecto
    resetSpacing();
});