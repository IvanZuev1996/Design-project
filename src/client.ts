import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

export const client = createClient({
    projectId: 'u4q08jjx',
    dataset: 'production',
    apiVersion: '2022-02-01',
    useCdn: true,
    token: 'skj7qrImp6KFINFxcEV5fjYF6MDKem4HFifDeTU8PBUWKsQgHV6HXa5cvAsS6MarCLUe1fdQgfrd83V2Kuyc22fyvu4nIBIolb8ryMvbDlG2UejuGwd4fJwqWzzn5T0fUBNZgPN2b8XkqDvWzBVhs1fLN3IaBPKuROCkwwL9hHoOBVA5cauI'
});

const builder = imageUrlBuilder(client);

export const urlFor = (source: SanityImageSource) => builder.image(source);
