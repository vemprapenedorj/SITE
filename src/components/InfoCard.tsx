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
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="group relative rounded-3xl overflow-hidden aspect-[3/4] shadow-md cursor-pointer bg-gray-100"
      onClick={() => onOpen(item)}
    >
      {/* Blurred Background Layer for Contained Images */}
      {['pequena-finlandia', 'pequena-finlandia-shopping', 'lelu-museu', 'hotel-girassol', 'hotel-bertell', 'hotel-britannia', 'hotel-daniela', 'hotel-rio-penedo', 'hotel-do-sino', 'hotel-titanic', 'pousada-aurora-mantiqueira', 'pousada-chez-nous', 'pousada-penedo', 'pousada-reserva-penedo', 'pousada-terraco', 'pousada-villa-luna', 'vila-francesa-hotel', 'aglio-e-olio', 'bazzini-pizzeria', 'borbulha-penedo', 'botegare', 'braseiro-gaucho', 'casa-da-picanha', 'casa-do-fritz', 'enoteca-serrana', 'estancia-penedo', 'kaiten-sushi', 'loazo-resto', 'petit-gourmet', 'pizza-da-villa', 'querencia', 'rei-das-trutas', 'restaurante-finlandes', 'truta-viva', 'zero-a-zero', 'expedicao-raizes', 'aguia-de-penedo', 'rota-dos-passeios', 'trilhando-penedo', 'tonttulakki-suklaat', 'lugano-penedo', 'lolita-penedo', 'kahvila-cafe'].includes(item.id) && (
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
        className={`relative z-10 w-full h-full transition-transform duration-700 group-hover:scale-110 ${
          item.id === 'shopping-roda-dagua'
            ? 'object-cover object-right'
            : item.id === 'hotel-girassol'
            ? 'object-contain object-center'
            : ['pequena-finlandia', 'pequena-finlandia-shopping', 'lelu-museu', 'hotel-bertell', 'hotel-britannia', 'hotel-daniela', 'hotel-rio-penedo', 'hotel-do-sino', 'hotel-titanic', 'pousada-aurora-mantiqueira', 'pousada-chez-nous', 'pousada-penedo', 'pousada-reserva-penedo', 'pousada-terraco', 'pousada-villa-luna', 'vila-francesa-hotel', 'aglio-e-olio', 'bazzini-pizzeria', 'borbulha-penedo', 'botegare', 'braseiro-gaucho', 'casa-da-picanha', 'casa-do-fritz', 'enoteca-serrana', 'estancia-penedo', 'kaiten-sushi', 'loazo-resto', 'petit-gourmet', 'pizza-da-villa', 'querencia', 'rei-das-trutas', 'restaurante-finlandes', 'truta-viva', 'zero-a-zero', 'expedicao-raizes', 'aguia-de-penedo', 'rota-dos-passeios', 'trilhando-penedo', 'tonttulakki-suklaat', 'lugano-penedo', 'lolita-penedo', 'kahvila-cafe'].includes(item.id) 
              ? 'object-contain object-top' 
              : 'object-cover'
        }`}
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
      <div className="absolute bottom-0 left-0 z-30 p-6 text-white text-left">
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
        <div className="mt-4 flex items-center gap-2 text-penedo-gold text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
          <Info size={14} /> Informações
        </div>
      </div>
    </motion.div>
  );
}
