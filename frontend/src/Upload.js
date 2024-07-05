function Upload({passFile,passOrg,passView})
{
    return(
    <div className='cent'>
        <div class="upload-btn-wrapper">
            <button class="btnn">Upload a file</button>
            <input className='i' type="file" onChange={(e)=> {
            const f=e.target.files[0]
            passFile(f);
            passOrg(window.URL.createObjectURL(f))
            passView(true)
            }}>
            </input>
        </div>
    </div>
    )
}

export default Upload
