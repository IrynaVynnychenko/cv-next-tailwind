const THEME_BOOTSTRAP = `(function(){try{var t=localStorage.getItem('theme');var v=t==='light'||t==='dark'?t:'light';var r=document.documentElement;r.classList.remove('light','dark');r.classList.add(v);r.style.colorScheme=v;}catch(e){document.documentElement.classList.add('light')}})();`

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: THEME_BOOTSTRAP }} />
}
