
export const displayCode = (code: string) => {

  return (
    <div style={{height: '400px', overflow: 'auto'}}>
      <pre style={{margin: '0'}}>
        <code style={{fontSize: "12px"}}>
          {code}
        </code>
      </pre>
    </div>
  )
}
 