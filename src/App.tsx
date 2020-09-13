import React from 'react'

const WelcomeSection = () => {
  return (
    <div
      style = {{
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw'
      }}
    >
      <img
        src = {require('./logo/crocodic-logo.png')}
        style = {{
          height: 125,
          marginBottom: -10,
          width: 375
        }}
      />

      <h1
        style = {{
          color: 'rgb(48, 175, 193)',
          fontFamily: 'Montserrat',
          fontWeight: 'bolder',
          marginLeft: '10%',
          marginRight: '10%',
          textAlign: 'center'
        }}
      >
        React Native Team
      </h1>
      
      <h3
        style = {{
          fontFamily: 'Montserrat',
          fontWeight: 'normal',
          marginLeft: '10%',
          marginRight: '10%',
          textAlign: 'center'
        }}
      >
        Deliver Project and Building Inter Engineer Source Code Friendly
      </h3>
    </div>
  )
}

const TypeScriptSection = () => {
  return (
    <div
      style = {{
        alignItems: 'center',
        backgroundColor: 'rgb(245, 245, 245)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw'
      }}
    >
      <img
        src = {require('./logo/ts-logo.png')}
        style = {{
          height: 216,
          marginBottom: 20,
          width: 216
        }}
      />

      <h1
        style = {{
          color: 'rgb(48, 175, 193)',
          fontFamily: 'Montserrat',
          fontWeight: 'bolder',
          marginLeft: '10%',
          marginRight: '10%',
          textAlign: 'center'
        }}
      >
        Menggunakan TypeScript
      </h1>
      
      <h3
        style = {{
          fontFamily: 'Montserrat',
          fontWeight: 'normal',
          marginLeft: '10%',
          marginRight: '10%',
          textAlign: 'center'
        }}
      >
        Kami berinisiatif mengembangkan aplikasi menggunakan TypeScript, untuk meningkatkan kualitas supaya sumber kode aplikasi bisa dimaintenance dan dikoordinasi strukturnya antar tim yang berbeda kedepannya
      </h3>
    </div>
  )
}

const ProjectStructureSection = () => {
  return (
    <div
      style = {{
        alignItems: 'center',
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw'
      }}
    >
      <h1
        style = {{
          color: 'rgb(48, 175, 193)',
          fontFamily: 'Montserrat',
          fontWeight: 'bolder',
          marginLeft: '10%',
          marginRight: '10%',
          textAlign: 'center'
        }}
      >
        Opinionated Readable Project Structure
      </h1>

      <img
        src = {require('./screenshots/project-structure.png')}
        style = {{
          border: 'solid 5px rgba(0, 0, 0, 0.125)',
          borderRadius: 5,
          height: 395,
          marginTop: 20,
          width: 275
        }}
      />
    </div>
  )
}

const PerComponentSection = () => {
  return (
    <div
      style = {{
        alignItems: 'center',
        backgroundColor: 'rgb(245, 245, 245)',
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
        justifyContent: 'center',
        width: '100vw'
      }}
    >
      <h1
        style = {{
          color: 'rgb(48, 175, 193)',
          fontFamily: 'Montserrat',
          fontWeight: 'bolder',
          marginLeft: '10%',
          marginRight: '10%',
          textAlign: 'center'
        }}
      >
        Mengembangkan isi kode dengan skema per Component
      </h1>

      <img
        src = {require('./screenshots/per-component-scheme.png')}
        style = {{
          border: 'solid 5px rgba(0, 0, 0, 0.125)',
          borderRadius: 5,
          height: 245,
          marginTop: 20,
          width: 275
        }}
      />
      
      <h3
        style = {{
          fontFamily: 'Montserrat',
          fontWeight: 'normal',
          marginLeft: '10%',
          marginRight: '10%',
          marginTop: 40,
          textAlign: 'center'
        }}
      >
        Kami menyusun struktur kode berbasis per komponen - komponen, jika ada masalah di kode, engineer akan dipermudah melakukan perbaikan, akan lebih sering memperbaiki per komponen dibanding berkutik mengubah kode satu fitur penuh
      </h3>
    </div>
  )
}

const App = () => {
  return (
    <>
      <WelcomeSection />

      <TypeScriptSection />

      <ProjectStructureSection />

      <PerComponentSection />
    </>
  )
}

export default App