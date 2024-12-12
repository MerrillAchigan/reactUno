// import styles from './Button.module.css'

function Button(){
    
    const styles = {
            backgroundColor: 'hsl(195, 100%, 79%)',
            color:'brown',
            border: 'none',
            cursor: 'pointer',
            padding: '10px 20px',
            borderRadius: '5px',
          
    }

    const handleClick = (e) => e.target.textContent = 'OUCH🥹';
    
    return(
        
    <>
    <button style={styles} onClick={(e) => handleClick(e)}>Click me</button>
    </>
    );
}

export default Button