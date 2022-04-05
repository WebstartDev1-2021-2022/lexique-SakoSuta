export const MyComponent = ({username, text_color, children}) => 
<>
<p style={{color: text_color}}>
    Bonjour {`${username} ${text_color}`}
</p>
<div>
    {children}
</div>
</>