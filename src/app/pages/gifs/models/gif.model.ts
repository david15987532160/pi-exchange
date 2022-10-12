export interface ISize {
    height: string;
    width: string;
    size: string;
    url: string;
}

export interface IGIF {
    analytics: string;
    analytics_response_payload: string;
    bitly_gif_url: string;
    bitly_url: string;
    content_url: string;
    embed_url: string;
    id: string;
    images: {
        '480w_still': ISize;
        original: {
            height: string;
            width: string;
            size: string;
            url: string;
            mp4_size: string;
            mp4: string;
            webp_size: string;
            webp: string;
            frames: string;
            hash: string;
        };
        downsized: ISize;
        downsized_large: ISize;
        downsized_medium: ISize;
        downsized_small: {
            height: string;
            mp4: string;
            mp4_size: string;
            width: string;
        };
        downsized_still: ISize;
        fixed_height: {
            height: string;
            width: string;
            size: string;
            url: string;
            mp4_size: string;
            mp4: string;
            webp_size: string;
            webp: string;
        };
        fixed_height_downsampled: {
            height: string;
            width: string;
            size: string;
            url: string;
            webp_size: string;
            webp: string;
        },
        fixed_height_small: {
            height: string;
            width: string;
            size: string;
            url: string;
            mp4_size: string;
            mp4: string;
            webp_size: string;
            webp: string;
        },
        fixed_height_small_still: ISize;
        fixed_height_still: ISize;
        fixed_width: {
            height: string;
            width: string;
            size: string;
            url: string;
            mp4_size: string;
            mp4: string;
            webp_size: string;
            webp: string;
        },
        fixed_width_downsampled: {
            height: string;
            width: string;
            size: string;
            url: string;
            webp_size: string;
            webp: string;
        },
        fixed_width_small: {
            height: string;
            width: string;
            size: string;
            url: string;
            mp4_size: string;
            mp4: string;
            webp_size: string;
            webp: string;
        },
        fixed_width_small_still: ISize;
        fixed_width_still: ISize;
        looping: {
            mp4_size: string;
            mp4: string;
        },
        original_still: ISize;
        original_mp4: {
            height: string;
            width: string;
            mp4_size: string;
            mp4: string;
        },
        preview: {
            height: string;
            width: string;
            mp4_size: string;
            mp4: string;
        },
        preview_gif: ISize;
        preview_webp: ISize;
        hd: {
            height: string;
            width: string;
            mp4_size: string;
            mp4: string;
        };
    };
    import_datetime: string;
    is_sticker: number;
    rating: 'y' | 'g' | 'pg' | 'pg-13' | 'r';
    slug: string;
    source: string;
    source_post_url: string;
    source_tld: string;
    title: string;
    trending_datetime: string;
    type: string;
    url: string;
    user: {
        avatar_url: string;
        banner_image: string;
        banner_url: string;
        profile_url: string;
        username: string;
        display_name: string;
        description: string;
        instagram_url: string;
        website_url: string;
        is_verified: boolean;
    };
    username: string;
}
