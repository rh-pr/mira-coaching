export function scrollToHash(hash: string) {
   if (!hash) return;

   const el = document.getElementById(hash);
   if (el) {
    el.scrollIntoView({behavior: 'smooth'})
   }
}