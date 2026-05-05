import { useNavigate } from 'react-router-dom';

const styles: Record<string, React.CSSProperties> = {
  layout: {
    display: 'flex',
    minHeight: '100vh',
  },
  sidebar: {
    width: '220px',
    backgroundColor: '#8B0000',
    display: 'flex',
    flexDirection: 'column',
    padding: '32px 0',
    boxShadow: '2px 0 8px rgba(0,0,0,0.2)',
    flexShrink: 0,
  },
  sidebarTitle: {
    color: 'rgba(255,255,255,0.6)',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '1.5px',
    textTransform: 'uppercase',
    padding: '0 24px 20px',
    borderBottom: '1px solid rgba(255,255,255,0.15)',
    marginBottom: '12px',
  },
  navButton: {
    background: 'none',
    border: 'none',
    color: '#ffffff',
    fontSize: '15px',
    fontWeight: '500',
    padding: '12px 24px',
    textAlign: 'left',
    cursor: 'pointer',
    width: '100%',
    transition: 'background-color 0.15s',
    borderRadius: '0',
  },
  sairButton: {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.65)',
    fontSize: '15px',
    fontWeight: '500',
    padding: '12px 24px',
    textAlign: 'left',
    cursor: 'pointer',
    width: '100%',
    marginTop: 'auto',
    transition: 'color 0.15s',
  },
  content: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    padding: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    color: '#888',
    fontSize: '18px',
  },
};

export default function Admin() {
  const navigate = useNavigate();

  function handleSair() {
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <div style={styles.layout}>
      <aside style={styles.sidebar}>
        <p style={styles.sidebarTitle}>Menu</p>

        <button
          style={styles.navButton}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Perguntas
        </button>
        <button
          style={styles.navButton}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
        >
          Editor
        </button>

        <button
          style={styles.sairButton}
          onClick={handleSair}
          onMouseOver={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseOut={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
        >
          Sair
        </button>
      </aside>

      <main style={styles.content}>
        <p style={styles.placeholder}>Selecione uma opção no menu lateral.</p>
      </main>
    </div>
  );
}
