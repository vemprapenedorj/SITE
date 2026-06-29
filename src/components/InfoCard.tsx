import React from 'react';
import { Info } from 'lucide-react';
import { motion } from 'motion/react';
import { DetailItem } from '../types';

interface InfoCardProps {
  item: DetailItem;
  onOpen: (item: DetailItem) => void;
  key?: string;
}

export function InfoCard({ item, onOpen }: InfoCardProps) {
  const imgClass = React.useMemo(() => {
    let classes = "relative z-10 w-full h-full transition-transform duration-700 ";
    
    // Scale / Zoom logic specifically for horizontal logos with empty margins like Pousada do Sol
    if (item.id === 'pousada-do-sol') {
      classes += "scale-[1.35] origin-top group-hover:scale-[1.45] ";
    } else {
      classes += "group-hover:scale-110 ";
    }
    
    // Object fit logic
    if (item.id === 'shopping-roda-dagua') {
      classes += "object-cover object-right";
    } else if (item.id === 'hotel-girassol') {
      classes += "object-contain object-center";
    } else if (['pequena-finlandia', 'pequena-finlandia-shopping', 'lelu-museu', 'hotel-bertell', 'hotel-britannia', 'hotel-daniela', 'hotel-rio-penedo', 'hotel-do-sino', 'hotel-titanic', 'pousada-aurora-mantiqueira', 'pousada-chez-nous', 'pousada-penedo', 'pousada-reserva-penedo', 'pousada-terraco', 'pousada-villa-luna', 'pousada-rainha-mata', 'pousada-rainha-da-mata', 'vila-francesa-hotel', 'hotel-casa-encantada', 'pousada-santa-fe', 'pousada-do-sol', 'vert-hotel', 'pousada-lago', 'hotel-terras-finlandia', 'aglio-e-olio', 'bazzini-pizzeria', 'borbulha-penedo', 'botegare', 'braseiro-gaucho', 'casa-da-picanha', 'casa-do-fritz', 'enoteca-serrana', 'estancia-penedo', 'kaiten-sushi', 'loazo-resto', 'petit-gourmet', 'pizza-da-villa', 'querencia', 'rei-das-trutas', 'restaurante-finlandes', 'truta-viva', 'zero-a-zero', 'expedicao-raizes', 'aguia-de-penedo', 'rota-dos-passeios', 'trilhando-penedo', 'tonttulakki-suklaat', 'lugano-penedo', 'lolita-penedo', 'kahvila-cafe'].includes(item.id)) {
      classes += "object-contain object-top";
    } else {
      classes += "object-cover";
    }
    
    return classes;
  }, [item.id]);

  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md cursor-pointer bg-gray-100"
      onClick={() => onOpen(item)}
    >
      {/* Blurred Background Layer for Contained Images */}
      {['pequena-finlandia', 'pequena-finlandia-shopping', 'lelu-museu', 'hotel-girassol', 'hotel-bertell', 'hotel-britannia', 'hotel-daniela', 'hotel-rio-penedo', 'hotel-do-sino', 'hotel-titanic', 'pousada-aurora-mantiqueira', 'pousada-chez-nous', 'pousada-penedo', 'pousada-reserva-penedo', 'pousada-terraco', 'pousada-villa-luna', 'pousada-rainha-mata', 'pousada-rainha-da-mata', 'vila-francesa-hotel', 'hotel-casa-encantada', 'pousada-santa-fe', 'pousada-do-sol', 'vert-hotel', 'pousada-lago', 'hotel-terras-finlandia', 'aglio-e-olio', 'bazzini-pizzeria', 'borbulha-penedo', 'botegare', 'braseiro-gaucho', 'casa-da-picanha', 'casa-do-fritz', 'enoteca-serrana', 'estancia-penedo', 'kaiten-sushi', 'loazo-resto', 'petit-gourmet', 'pizza-da-villa', 'querencia', 'rei-das-trutas', 'restaurante-finlandes', 'truta-viva', 'zero-a-zero', 'expedicao-raizes', 'aguia-de-penedo', 'rota-dos-passeios', 'trilhando-penedo', 'tonttulakki-suklaat', 'lugano-penedo', 'lolita-penedo', 'kahvila-cafe'].includes(item.id) && (
        <div 
          className="absolute inset-0 z-0 opacity-40 scale-110 blur-xl"
          style={{ 
            backgroundImage: `url(${item.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
      )}
      
      <img 
        src={item.image} 
        loading="lazy"
        className={imgClass}
        alt={item.title} 
        referrerPolicy="no-referrer" 
      />
      
      {/* Badge/Tag de Destaque para itens Premium */}
      {(item.isPremium || (item as any).is_premium) && (
        <div className="absolute top-4 left-4 z-30">
          <span className="bg-penedo-gold text-black font-black text-[9px] uppercase tracking-tighter px-3 py-1.5 rounded-full shadow-lg">
            {item.tag_destaque || (item as any).tag_destaque || "Destaque"}
          </span>
        </div>
      )}

      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 z-30 px-6 pb-4 pt-6 text-white text-left">
        <span className="inline-block px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-[8px] font-bold uppercase tracking-wider mb-2">
          {item.category}
        </span>
        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
        
        {item.tripadvisorUrl && (
          <div className="card-rating !text-white/70" onClick={(e) => e.stopPropagation()}>
            ⭐ {item.rating || '4.5'} no 
            <a href={item.tripadvisorUrl} target="_blank" rel="noopener noreferrer" className="!text-white hover:underline">
              Tripadvisor
            </a>
          </div>
        )}

        <p className="text-white/60 text-xs line-clamp-2">{item.description}</p>
      </div>
    </motion.div>
  );
}
