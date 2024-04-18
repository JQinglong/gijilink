export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      council: {
        Row: {
          description: string
          id: string
          ministry_id: string
          name: string
          url: string
        }
        Insert: {
          description: string
          id: string
          ministry_id: string
          name: string
          url: string
        }
        Update: {
          description?: string
          id?: string
          ministry_id?: string
          name?: string
          url?: string
        }
        Relationships: [
          {
            foreignKeyName: 'polilink_api_council_ministry_id_8d4b67e1_fk_polilink_'
            columns: ['ministry_id']
            isOneToOne: false
            referencedRelation: 'ministry'
            referencedColumns: ['id']
          },
        ]
      }
      councilmeeting: {
        Row: {
          council_id: string
          id: string
          meeting_date: string | null
          name: string
          order: number
          place: string | null
          url_document: string | null
          url_minute: string | null
        }
        Insert: {
          council_id: string
          id: string
          meeting_date?: string | null
          name: string
          order: number
          place?: string | null
          url_document?: string | null
          url_minute?: string | null
        }
        Update: {
          council_id?: string
          id?: string
          meeting_date?: string | null
          name?: string
          order?: number
          place?: string | null
          url_document?: string | null
          url_minute?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'polilink_api_council_council_id_360fb27e_fk_polilink_'
            columns: ['council_id']
            isOneToOne: false
            referencedRelation: 'council'
            referencedColumns: ['id']
          },
        ]
      }
      councilmember: {
        Row: {
          council_id: string
          id: string
          name: string
          occupation: string | null
          person_id: string | null
          position: string | null
        }
        Insert: {
          council_id: string
          id: string
          name: string
          occupation?: string | null
          person_id?: string | null
          position?: string | null
        }
        Update: {
          council_id?: string
          id?: string
          name?: string
          occupation?: string | null
          person_id?: string | null
          position?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'polilink_api_council_council_id_bb87fb6a_fk_polilink_'
            columns: ['council_id']
            isOneToOne: false
            referencedRelation: 'council'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'polilink_api_council_person_id_bdfcb521_fk_polilink_'
            columns: ['person_id']
            isOneToOne: false
            referencedRelation: 'person'
            referencedColumns: ['id']
          },
        ]
      }
      councilnews: {
        Row: {
          council_id: string
          description: string | null
          id: string
          image: string | null
          site_name: string | null
          title: string | null
          url: string | null
        }
        Insert: {
          council_id: string
          description?: string | null
          id: string
          image?: string | null
          site_name?: string | null
          title?: string | null
          url?: string | null
        }
        Update: {
          council_id?: string
          description?: string | null
          id?: string
          image?: string | null
          site_name?: string | null
          title?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'polilink_api_council_council_id_cd9dad7e_fk_polilink_'
            columns: ['council_id']
            isOneToOne: false
            referencedRelation: 'council'
            referencedColumns: ['id']
          },
        ]
      }
      counciltree: {
        Row: {
          council_id: string
          id: string
          level: number
          order: number
          parent_id: string | null
        }
        Insert: {
          council_id: string
          id: string
          level: number
          order: number
          parent_id?: string | null
        }
        Update: {
          council_id?: string
          id?: string
          level?: number
          order?: number
          parent_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'polilink_api_council_council_id_92e8fd9e_fk_polilink_'
            columns: ['council_id']
            isOneToOne: false
            referencedRelation: 'council'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'polilink_api_council_parent_id_8cbaac58_fk_polilink_'
            columns: ['parent_id']
            isOneToOne: false
            referencedRelation: 'council'
            referencedColumns: ['id']
          },
        ]
      }
      meetingspeech: {
        Row: {
          council_id: string
          council_meeting_id: string
          description: string | null
          id: string
          order: number
          person_id: string | null
          speaker: string
          speech: string | null
        }
        Insert: {
          council_id: string
          council_meeting_id: string
          description?: string | null
          id: string
          order: number
          person_id?: string | null
          speaker: string
          speech?: string | null
        }
        Update: {
          council_id?: string
          council_meeting_id?: string
          description?: string | null
          id?: string
          order?: number
          person_id?: string | null
          speaker?: string
          speech?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'polilink_api_meeting_council_id_feb07430_fk_polilink_'
            columns: ['council_id']
            isOneToOne: false
            referencedRelation: 'council'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'polilink_api_meeting_council_meeting_id_de1ad4ed_fk_polilink_'
            columns: ['council_meeting_id']
            isOneToOne: false
            referencedRelation: 'councilmeeting'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'polilink_api_meeting_person_id_51d4ab64_fk_polilink_'
            columns: ['person_id']
            isOneToOne: false
            referencedRelation: 'person'
            referencedColumns: ['id']
          },
        ]
      }
      memo: {
        Row: {
          id: number
          memo: string
          title: string
        }
        Insert: {
          id?: number
          memo: string
          title: string
        }
        Update: {
          id?: number
          memo?: string
          title?: string
        }
        Relationships: []
      }
      ministry: {
        Row: {
          abbreviation: string
          id: string
          name: string
          name_e: string
          url: string
        }
        Insert: {
          abbreviation: string
          id: string
          name: string
          name_e: string
          url: string
        }
        Update: {
          abbreviation?: string
          id?: string
          name?: string
          name_e?: string
          url?: string
        }
        Relationships: []
      }
      person: {
        Row: {
          career_summary: string | null
          id: string
          name: string
          name_e: string | null
          name_kana: string
          url_facebook: string | null
          url_official: string | null
          url_twitter: string | null
          url_wikipedia: string | null
          url_youtube: string | null
        }
        Insert: {
          career_summary?: string | null
          id: string
          name: string
          name_e?: string | null
          name_kana: string
          url_facebook?: string | null
          url_official?: string | null
          url_twitter?: string | null
          url_wikipedia?: string | null
          url_youtube?: string | null
        }
        Update: {
          career_summary?: string | null
          id?: string
          name?: string
          name_e?: string | null
          name_kana?: string
          url_facebook?: string | null
          url_official?: string | null
          url_twitter?: string | null
          url_wikipedia?: string | null
          url_youtube?: string | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'profiles_id_fkey'
            columns: ['id']
            isOneToOne: true
            referencedRelation: 'users'
            referencedColumns: ['id']
          },
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_avatar: {
        Args: {
          avatar_url: string
        }
        Returns: Record<string, unknown>
      }
      delete_storage_object: {
        Args: {
          bucket: string
          object: string
        }
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, 'public'>]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema['Tables'] & PublicSchema['Views'])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions['schema']]['Tables'] &
        Database[PublicTableNameOrOptions['schema']]['Views'])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions['schema']]['Tables'] &
      Database[PublicTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema['Tables'] &
        PublicSchema['Views'])
    ? (PublicSchema['Tables'] &
        PublicSchema['Views'])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema['Tables']
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions['schema']]['Tables']
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema['Tables']
    ? PublicSchema['Tables'][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema['Enums']
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions['schema']]['Enums'][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema['Enums']
    ? PublicSchema['Enums'][PublicEnumNameOrOptions]
    : never
