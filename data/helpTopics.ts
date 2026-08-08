export interface HelpTopic {
  icon: string;
  title: string;
  description: string;
}

export const HELP_TOPICS: HelpTopic[] = [
  {
    icon: "cell_tower",
    title: "Elige tus canales",
    description: "Activa Telegram, Facebook o Instagram para publicar en varios sitios a la vez.",
  },
  {
    icon: "edit_note",
    title: "Redacta el mensaje",
    description: "Usa el emoji, hashtag y mención en la barra de herramientas del editor.",
  },
  {
    icon: "perm_media",
    title: "Agrega multimedia",
    description: "Arrastra imágenes o videos, o haz clic en la zona para explorar tus archivos.",
  },
  {
    icon: "preview",
    title: "Revisa la vista previa",
    description: "Cambia entre pestañas para ver cómo se verá tu publicación en cada canal.",
  },
];

export const SUPPORT_EMAIL = "soporte@ueclc.edu.ve";
