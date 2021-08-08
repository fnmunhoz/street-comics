module MarvelApi
  module V1
    class Client

      def initialize(args = nil) end

      def comics(params)
        client.get('comics', params)
      end

      def characters(params)
        client.get('characters', params)
      end

      private

      def client
        @_client ||= Faraday.new(base_url, { params: default_params }) do |client|
          client.request :json
          client.response :json
        end
      end

      def base_url
        'https://gateway.marvel.com:443/v1/public'
      end

      def default_params
        timestamp = Time.now.getutc.to_i.to_s
        hash = Digest::MD5.hexdigest(timestamp + private_api_key + public_api_key)

        {
          ts: timestamp,
          apikey: public_api_key,
          hash: hash,
        }
      end

      def public_api_key
        Rails.application.credentials.marvel_api[:v1][:public_api_key]
      end

      def private_api_key
        Rails.application.credentials.marvel_api[:v1][:private_api_key]
      end
    end
  end
end

