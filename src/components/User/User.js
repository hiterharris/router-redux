const User = ({ user }) => {

    const style = {
        width: '20%',
        margin: '24px auto',
        padding: '12px',
        border: '1px solid black',
    }

    return (
        <div style={style}>
            <p style={{ textAlign: 'left', margin: '0px 0px 16px 0px' }}>{user.name}</p>
            <p style={{ textAlign: 'left', margin: '0px 0px 24px 0px' }}>{user.favoriteColor}</p>
            <button>Add to Cart</button>
        </div>
    )
}

export default User